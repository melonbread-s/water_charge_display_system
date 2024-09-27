'use client'
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState({
    diameter : "",
    usage_amount : ""
  })

  const [charge, setCharge] = useState(0)

  const handlers = {
    diameter_input: (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        diameter : e.target.value
      })
    },
    usage_amount_input: (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        usage_amount : e.target.value
      })
    },
    submit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setCharge(Number(state.diameter) + Number(state.usage_amount))
      }
    }
  

  return (
    <>
      <form
        onSubmit={handlers.submit}
      >
        <div className = 'row'>
          <label>
              口径
          </label>
          <input
              type='text'
              value={state.diameter}
              onChange={handlers.diameter_input}
          />
        </div>
        <div className = 'row'>
          <label>
              使用量
          </label>
          <input
              type='text'
              value={state.usage_amount}
              onChange={handlers.usage_amount_input}
          />
        </div>
        
        <button type='submit'>
            料金表示
        </button>

        {charge == 0 || <p>あなたの料金は{charge}です</p> }
      </form>
    </>
  );
}
