interface SwitchProps { 
    isChecked : boolean,
  onChange: () => void,
  className?: string, 
  checkedChildren: string | JSX.Element
  unCheckedChildren: string | JSX.Element
}

export const Switch = ({onChange, checkedChildren, unCheckedChildren, isChecked, className =''}:SwitchProps) => {
    return (
    <>
    <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
      <input
        type='checkbox'
        className='sr-only'
        checked={isChecked}
        onChange={onChange}
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          !isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
        }`}
      >
        {checkedChildren}
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
        }`}
      >
        {unCheckedChildren}
      </span>
    </label>
  </>
    )
}
