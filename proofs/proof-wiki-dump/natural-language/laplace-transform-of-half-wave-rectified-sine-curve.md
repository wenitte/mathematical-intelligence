# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Half_Wave_Rectified_Sine_Curve

Theorem
Consider the half wave rectified sine curve:

$\map f t = \begin {cases} \sin t & : 2 n \pi \le t \le \paren {2 n + 1} \pi \\ 0 & : \paren {2 n + 1} \pi \le t \le \paren {2 n + 2} \pi \end {cases}$

The Laplace transform of $\map f t$ is given by:

$\laptrans {\map f t} = \dfrac 1 {\paren {1 - e^{-\pi s} } \paren {s^2 + 1} }$


Proof
We have that $\map f t$ is periodic with period $2 \pi$:




Hence:














\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \int_0^{2 \pi} e^{-s t} \map f t \rd t\)





Laplace Transform of Periodic Function














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \paren {\int_0^\pi e^{-s t} \sin t \rd t + \int_\pi^{2 \pi} e^{-s t} \times 0 \rd t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \int_0^\pi e^{-s t} \sin t \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \intlimits {\dfrac {e^{-s t} \paren {-s \sin t - \cos t} } {s^2 + 1} } 0 \pi\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \paren {\dfrac {e^{-s \pi} \paren {-s \sin \pi - \cos \pi} } {s^2 + 1} - \dfrac {e^{-s \times 0} \paren {-s \sin 0 - \cos 0} } {s^2 + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \paren {\dfrac {e^{-s \pi} \paren {-\cos \pi} } {s^2 + 1} - \dfrac {e^{-s \times 0} \paren {- \cos 0} } {s^2 + 1} }\)





Sine of Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \paren {\dfrac {e^{-s \pi} \paren {-\paren {-1} } } {s^2 + 1} - \dfrac {e^{-s \times 0} \paren {-1} } {s^2 + 1} }\)





Cosine of Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \paren {\dfrac {e^{-s \pi} \paren {-\paren {-1} } } {s^2 + 1} - \dfrac {1 \times \paren {-1} } {s^2 + 1} }\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - e^{-2 \pi s} } \paren {\dfrac {e^{-s \pi} + 1} {s^2 + 1} }\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {1 + e^{-\pi s} } \paren {1 - e^{-\pi s} } } \paren {\dfrac {e^{-s \pi} + 1} {s^2 + 1} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\paren {1 - e^{-\pi s} } \paren {s^2 + 1} }\)





simplification



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Periodic Functions: $24 \ \text{(b)}$




