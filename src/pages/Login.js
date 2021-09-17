import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import iPhonePic from "../assets/iphone-with-pets.png";
// import logo from "../assets/logo.png";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress.trim(), password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  const handleVisitor = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword("TestAccount@mail.com", "TestAccount");
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = "Login - Petstagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      {/* left side */}
      <div className="hidden lg:flex w-1/2 justify-end">
        {/* iphone image */}
        <img src={iPhonePic} className="max-h-96" alt="iphone with ig app" />
      </div>
      {/* right side */}
      <div className="flex flex-col p-3 lg:p-0 lg:w-1/2">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4">
          {/* logo header */}
          <h1 className="flex justify-center w-full">
            {/* <img src={logo} alt="igLogo" className="mt-2 w-6/12 mb-4" /> */}
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1250.000000 350.000000"
              preserveAspectRatio="xMidYMid meet"
              className="mt-2 w-6/12 mb-4"
            >
              <g
                transform="translate(0.000000,350.000000) scale(0.100000,-0.100000)"
                fill="#231F20"
                stroke="none"
              >
                <path
                  d="M774 3359 c-303 -50 -550 -278 -660 -606 -35 -106 -45 -299 -19 -389
25 -89 62 -149 130 -213 71 -65 143 -104 189 -99 46 4 46 41 2 120 -50 90 -66
163 -67 299 0 139 13 218 53 320 36 93 85 158 163 221 61 49 80 57 86 36 2 -7
1 -413 -2 -903 -6 -987 -3 -941 -74 -1090 -19 -39 -35 -86 -35 -104 0 -30 1
-31 45 -31 65 0 130 37 202 114 132 141 172 292 173 646 l0 195 93 17 c183 34
373 111 503 204 129 91 231 240 269 389 20 78 20 269 -1 355 -61 261 -288 454
-604 514 -90 17 -356 20 -446 5z m431 -245 c155 -40 273 -167 314 -338 15 -63
15 -205 0 -276 -29 -138 -123 -266 -238 -324 -110 -56 -275 -83 -302 -49 -11
13 -15 109 -17 510 l-3 493 94 0 c52 0 119 -7 152 -16z"
                />
                <path
                  d="M2933 3313 c-15 -23 -19 -56 -21 -226 l-4 -199 -163 7 -163 7 -18
-28 c-22 -33 -32 -151 -15 -183 11 -20 19 -21 178 -21 l166 0 -7 -392 c-8
-435 -1 -390 -88 -536 -119 -198 -250 -311 -397 -343 -130 -28 -237 73 -277
260 -18 88 -18 101 5 101 39 0 208 62 278 102 39 22 98 67 131 100 101 101
142 199 142 343 0 98 -18 141 -87 212 -65 67 -143 93 -277 93 -152 0 -253 -46
-365 -165 -141 -151 -211 -361 -211 -632 0 -165 18 -261 69 -368 65 -136 157
-220 292 -265 55 -19 81 -21 179 -18 126 4 182 21 297 89 77 46 207 177 270
273 l52 78 11 -43 c46 -184 112 -304 194 -354 42 -26 61 -30 131 -33 73 -4 88
-1 136 23 73 37 188 156 271 280 66 100 278 477 278 495 0 21 19 6 125 -98
134 -133 166 -186 173 -287 4 -58 0 -81 -16 -118 -48 -109 -153 -114 -291 -13
-75 55 -94 56 -145 5 -52 -53 -84 -128 -70 -167 27 -76 255 -143 436 -128 244
20 417 153 568 438 41 78 50 88 50 63 1 -64 41 -221 74 -291 38 -81 100 -149
161 -179 61 -29 171 -33 223 -6 87 44 173 146 234 276 l32 69 16 -50 c45 -131
123 -234 215 -282 47 -25 58 -27 175 -26 105 0 134 4 183 23 70 27 162 113
195 181 14 29 22 38 22 24 0 -34 49 -121 88 -155 87 -76 216 -102 308 -60 58
27 121 86 156 148 17 29 31 53 33 53 2 0 17 -23 35 -50 44 -69 111 -125 179
-151 48 -18 70 -20 161 -16 141 7 202 30 281 107 l59 58 0 -47 -1 -46 -176
-160 c-315 -286 -417 -424 -430 -584 -14 -171 74 -298 246 -351 132 -41 277
-17 386 65 100 75 144 141 188 281 42 134 57 267 57 518 l0 227 91 111 c111
136 169 222 240 353 114 212 219 463 219 528 l0 27 110 0 c61 0 110 -4 110 -8
0 -5 -9 -51 -20 -103 -43 -209 -53 -458 -25 -605 60 -317 330 -470 541 -309
18 14 50 51 72 84 l40 60 31 -50 c74 -113 167 -159 325 -159 175 0 298 56 365
166 14 24 28 44 31 44 4 0 11 -15 18 -33 19 -54 78 -113 144 -146 50 -25 73
-31 128 -31 113 0 189 51 251 170 l23 45 11 -85 c10 -81 11 -85 45 -104 27
-16 57 -22 137 -24 97 -4 103 -3 126 20 23 23 24 32 31 194 9 221 21 315 56
449 48 186 134 392 166 402 8 3 14 -39 18 -134 14 -289 44 -560 72 -664 18
-63 60 -121 106 -145 40 -20 141 -21 171 -1 21 13 24 27 35 158 13 155 46 330
87 474 28 95 111 313 126 330 5 5 9 -97 9 -248 0 -469 37 -639 166 -756 118
-108 291 -110 384 -5 65 75 119 228 123 352 2 56 -1 66 -22 83 -41 33 -61 9
-93 -110 -30 -109 -55 -166 -84 -192 -79 -69 -157 10 -191 192 -14 77 -17 361
-9 826 1 66 -21 98 -101 140 -125 67 -221 73 -261 15 -56 -80 -185 -484 -223
-697 l-13 -70 -7 41 c-10 57 -29 386 -29 509 0 87 -3 108 -23 145 -42 79 -192
139 -269 107 -31 -13 -43 -28 -77 -99 -22 -46 -70 -173 -108 -283 l-68 -200
-3 259 c-2 221 -5 262 -18 277 -19 21 -133 49 -198 49 -33 0 -48 -5 -54 -17
-6 -10 -13 -216 -17 -458 -3 -242 -11 -458 -16 -480 -38 -159 -133 -295 -206
-295 -34 0 -80 46 -98 98 -30 87 -39 316 -28 697 7 224 7 357 1 368 -16 31
-96 60 -179 65 -71 4 -77 3 -93 -19 -9 -13 -16 -37 -16 -53 l0 -29 -51 51
c-78 78 -124 97 -239 97 -101 0 -139 -13 -218 -73 -81 -62 -175 -233 -218
-397 -24 -91 -27 -118 -28 -300 0 -110 1 -232 4 -271 5 -63 2 -76 -25 -129
-34 -67 -65 -93 -118 -102 -35 -5 -41 -2 -80 38 -50 52 -73 118 -88 246 -17
142 1 316 56 562 39 171 31 236 -34 274 -50 29 -93 30 -237 3 -77 -15 -151
-29 -166 -31 l-28 -4 2 68 c3 108 -41 156 -141 155 -110 -2 -177 -66 -201
-194 -12 -62 4 -120 48 -170 l35 -42 -13 -51 c-19 -77 -77 -230 -126 -332 -44
-94 -149 -272 -184 -315 l-21 -25 3 495 3 495 -49 24 c-32 16 -72 26 -121 29
-64 4 -75 2 -94 -17 -13 -13 -21 -34 -21 -56 l0 -34 -45 48 c-24 26 -68 61
-97 77 -48 26 -62 29 -148 29 -79 0 -103 -4 -142 -23 -133 -66 -240 -229 -298
-455 -32 -126 -46 -328 -32 -461 10 -94 10 -120 -2 -153 -25 -71 -54 -119 -92
-153 -32 -27 -42 -31 -73 -26 -44 7 -85 49 -101 103 -28 100 -33 205 -27 625
l6 427 -26 21 c-35 27 -116 50 -178 50 -63 0 -85 -19 -85 -74 l0 -38 -44 49
c-24 27 -68 62 -98 78 -48 27 -61 30 -148 30 -112 0 -161 -18 -236 -87 -142
-130 -222 -346 -243 -660 -6 -87 -17 -153 -30 -191 -65 -187 -190 -319 -269
-284 -29 13 -68 95 -83 177 -20 106 -6 1057 16 1079 4 3 92 8 197 11 l191 5
20 27 c26 35 35 129 15 146 -9 7 -90 16 -214 23 -109 6 -202 14 -205 17 -3 4
-2 84 3 177 4 94 6 179 3 191 -6 26 -76 57 -185 80 -72 16 -81 16 -103 1 -31
-20 -35 -42 -43 -260 l-7 -178 -156 2 c-148 1 -156 0 -173 -21 -35 -43 -51
-163 -26 -188 8 -8 47 -12 108 -12 52 0 125 -3 163 -7 l67 -6 0 -352 c0 -331
-1 -357 -21 -421 -36 -117 -113 -248 -187 -318 l-30 -28 5 59 c6 67 -15 155
-50 213 -39 64 -110 131 -257 243 -80 61 -149 114 -154 118 -5 5 8 34 33 68
57 82 103 184 109 241 9 94 -43 140 -156 140 -224 0 -389 -293 -263 -467 l27
-37 -42 -77 c-24 -42 -75 -139 -114 -215 -141 -272 -233 -384 -317 -384 -43 0
-68 26 -88 92 -19 61 -20 194 -9 766 l7 362 198 0 199 0 20 41 c15 29 20 55
18 92 -3 50 -4 51 -38 58 -19 4 -115 11 -213 15 l-178 7 7 192 7 193 -24 15
c-43 28 -176 67 -228 67 -44 0 -53 -4 -68 -27z m-480 -881 c15 -15 29 -42 33
-59 24 -119 -202 -401 -351 -439 l-28 -7 5 89 c11 174 113 372 223 432 38 21
89 14 118 -16z m3626 -57 c105 -54 155 -251 132 -523 -14 -159 -31 -225 -78
-310 -50 -89 -84 -126 -145 -156 -65 -32 -89 -33 -126 -1 -75 63 -117 247
-109 475 10 277 74 462 179 513 41 21 110 22 147 2z m1371 -7 c79 -54 116
-204 107 -438 -7 -187 -28 -284 -80 -379 -53 -97 -86 -134 -149 -165 -68 -34
-91 -33 -132 8 -79 80 -120 304 -97 532 24 242 91 394 196 448 45 24 115 20
155 -6z m2337 3 c39 -24 79 -92 101 -168 22 -76 23 -386 3 -488 -39 -197 -112
-318 -209 -345 -70 -19 -97 -13 -135 29 -74 82 -103 227 -94 475 10 284 60
427 172 497 40 25 120 25 162 0z m-2200 -1538 c-9 -286 -31 -385 -102 -462
-47 -51 -91 -71 -152 -71 -53 0 -88 18 -124 63 -50 65 2 231 121 389 50 66
246 278 258 278 2 0 2 -89 -1 -197z"
                />
              </g>
            </svg>
          </h1>
          {/* error message */}
          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
          {/* form */}
          <form onSubmit={handleLogin} method="POST">
            {/* email */}
            <input
              aria-label="Enter your email address"
              type="test"
              placeholder="Email address"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            {/* password */}
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="test-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* login button */}
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-primary text-white w-full rounded h-8 font-bold ${
                isInvalid && "opacity-50"
              }`}
            >
              Login
            </button>
          </form>
        </div>
        {/* switch to signup page */}
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border border-gray-primary">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-primary">
              Sign-up
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <p className="text-xs mt-2">Wanna look around?</p>
          <button
            type="submit"
            className="bg-green-primary text-white w-auto px-4 rounded h-8 font-bold mt-2"
            onClick={() => handleVisitor()}
          >
            Just visiting
          </button>
        </div>
      </div>
    </div>
  );
}
