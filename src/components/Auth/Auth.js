import React, {useState} from 'react'
import { Container, Grid, Avatar, Button, Typography, Paper } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'

import useStyles from './styles'

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setSignUp] = useState(false)

    const classes = useStyles()


    const handleSubmit = e => {

    }

    const handleChange = e => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword )

    const switchMode = (e) => {
        setSignUp(prevSignUp => !prevSignUp)
        handleShowPassword(false)
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus xs={6} />
                                <Input name="lasdtName" label="Last Name" handleChange={handleChange} autoFocus xs={6} />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>{isSignup ? "Sign Up" : "Sign in"}</Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : "don't have an account? Sign up"}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
