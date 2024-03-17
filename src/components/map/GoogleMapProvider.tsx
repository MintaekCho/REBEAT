import {Wrapper} from "@googlemaps/react-wrapper"

export default function GoogleMapProvider({children}: {children: React.ReactNode}) {
    const key = import.meta.env.VITE_SECOND_GOOGLE_API_KEY;
    return (
        <Wrapper apiKey={key}>
            {children}
        </Wrapper>
    );
}

