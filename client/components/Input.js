import React, {forwardRef} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'

const InputField = styled(TextField)`
    width: 100%;
    .MuiInput-underline::after {
      border-bottom: 1px solid ${props => props.theme.tertiary.color};
    }
    .MuiFormLabel-root.Mui-focused {
      color: ${props => props.theme.tertiary.color};
    }
`

const Input = forwardRef(({children, ...props}, ref) => {
    return (
        <Grid container spacing={1} alignItems="flex-end" style={{flexWrap: 'nowrap', marginBottom: '9%'}}>
          <Grid item>
          {children}
          </Grid>
          <Grid style={{width:'100%'}} item >
            <InputField 
                        InputProps={props.inputProps}
                        inputRef={ref}
                        {...props}
            />
          </Grid>
        </Grid>
    )
})

export default Input