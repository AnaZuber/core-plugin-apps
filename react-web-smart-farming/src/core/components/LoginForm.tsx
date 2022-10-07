import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button, TextInput, VerticalContainer, Form, Logo } from '../../components';
import { Theme } from '../context';
import { useCoreTheme } from '../hooks';

const useStyles = createUseStyles({
    button: {
        color: "#ffffff",
        borderRadius: 10,
        width: '100%',
        fontWeight: 'bold',
        backgroundcolor: "#4aad43",
        "&:hover": {
            backgroundColor: ({ palette }: Theme) => palette.secondary
        },
    },
    buttonMargin: {
        margin: "8px",
        marginTop: "15px"
    },
    color: {
        color: "#ffffff",
        textAlign: 'center',
    },
    label: {
        '& .MuiInputLabel-root': {
            fontWeight: 'bold',
            textAlign: 'center',
            color: "#ffffff",
        },
        "& .css-1480iag-MuiInputBase-root-MuiInput-root:after": {
            borderBottomcolor: "#ffffff",
        },
    },
    placeholder: {
        '& .css-1x51dt5-MuiInputBase-input-MuiInput-input': {
            textAlign: 'center',
            color: "#ffffff",
            fontWeight: '550',
            marginLeft: '-20px'
        },
        '& .MuiInput-input MuiInputBase-input MuiInputBase-inputAdornedStart css-1x51dt5-MuiInputBase-input-MuiInput-input': {
            color: ({ palette }: Theme) => 'red',
        }
    },
    margin: {
        margin: "8px",
    },
    icons: {
        color: "#ffffff",
    },
})

export default function LoginForm() {
    const theme = useCoreTheme();
    const classes = useStyles(theme);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isUsernameBlank, setIsUsernameBlank] = useState(false);
    const [isPasswordBlank, setIsPasswordBlank] = useState(false);

    type User = {
        username: string;
        password: string;
    }

    const user: User = {
        username: username,
        password: password
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        username ? setIsUsernameBlank(false) : setIsUsernameBlank(true);
        password ? setIsPasswordBlank(false) : setIsPasswordBlank(true);
        if (username && password) {
            //proslijediti username i password
            console.log(username, password)
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <VerticalContainer justifyContent='center' alignItems='center'>
                <Logo />
                <TextInput
                    className={`${classes.color} ${classes.margin} ${classes.label} ${classes.placeholder}`}
                    value={username}
                    onChange={setUsername}
                    placeholder="Username"
                    type="username"
                    iconName="account" />
                <TextInput
                    className={`${classes.color} ${classes.margin} ${classes.label} ${classes.placeholder}`}
                    value={password}
                    onChange={setPassword}
                    placeholder="Password"
                    type="password"
                    iconName="password" />
                <Button className={`${classes.button} ${classes.buttonMargin}`}
                    value="Login"
                    type="submit" />
            </VerticalContainer>
        </Form>
    );
}
