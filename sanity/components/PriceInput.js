import React from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

function createPatchFrom(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CNY',

}).format

export default function PrinceInput({ type, value, onChange, inputComponent}) {

    return (
        <div>
            <h2>{type.title} - {value ? formatMoney(value): ''}</h2>
            <p>{type.description}</p>
            <input
                type={type.name}
                value={value}
                onChange={event => onChange(createPatchFrom(event.target.value))}
                ref={inputComponent}
            />
        </div>
    )
}

PrinceInput.focus = function() {
    this._inputElement.focus()
}