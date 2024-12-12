# 

Source: https://proofwiki.org/wiki/Amplitude_of_Beats

Theorem
Let $W_1$ and $W_2$ be harmonic waves whose frequencies are $f_1$ and $f_2$.
Let the amplitude of $W_1$ and $W_2$ both be $a$.
Let the superpositon of $W_1$ onto $W_2$ exhibit the phenomenon of beats.
The amplitude $A_b$ of those beats at time $t$ is:

$A_b = 2 a \map \cos {\pi \size {f_1 - f_2} t - \dfrac \epsilon 2}$


Proof
Let $\omega_1$ and $\omega_2$ denote the angular frequency of $W_1$ and $W_2$ respectively.
Let us consider the harmonic waves that are $W_1$ and $W_2$ as they disturb the medium at $x = 0$.
Without loss of generality, therefore, let $W_1$ and $W_2$ be be expressed as:














\(\ds \map {\phi_1} t\)

\(=\)







\(\ds a \sin \omega_1 t\)




















\(\ds \map {\phi_2} t\)

\(=\)







\(\ds a \map \sin {\omega_2 t + \epsilon}\)









where:














\(\ds \omega_1\)

\(=\)







\(\ds 2 \pi f_1\)





Definition of Angular Frequency














\(\ds \omega_2\)

\(=\)







\(\ds 2 \pi f_2\)









and $\epsilon$ is the phase of $\phi_1$ with respect to $\phi_2$.

Then:














\(\ds \map {\phi_1} t + \map {\phi_2} t\)

\(=\)







\(\ds a \sin \omega_1 t + a \map \sin {\omega_2 t + \epsilon}\)





superimposing the two waves














\(\ds \)

\(=\)







\(\ds 2 a \map \sin {\dfrac {\omega_1 t + \omega_2 t + \epsilon} 2} \map \cos {\dfrac {\omega_1 t - \paren {\omega_2 t + \epsilon} } 2}\)





Sine plus Sine














\(\ds \)

\(=\)







\(\ds 2 a \map \sin {\dfrac {\paren {\omega_1 + \omega_2} t + \epsilon} 2} \map \cos {\dfrac {\paren {\omega_1 - \omega_2} t - \epsilon} 2}\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 a \map \sin {\dfrac {\paren {\omega_1 + \omega_2} t + \epsilon} 2} \map \cos {\dfrac {\size {\omega_1 - \omega_2} t - \epsilon} 2}\)





Cosine Function is Even








\(\ds \leadsto \ \ \)





\(\ds \size {\map {\phi_1} t + \map {\phi_2} t}\)

\(\le\)







\(\ds \size {2 a \map \cos {\dfrac {\size {\omega_1 - \omega_2} t - \epsilon} 2} }\)





as $\map \sin {\dfrac {\paren {\omega_1 + \omega_2} t} 2} \le 1$ throughout




Hence the amplitude $a$ of the slower component is seen to be:

$A_b = \dfrac {\size {\omega_1 - \omega_2} } 2$
By definition of angular frequency:














\(\ds A_b\)

\(=\)







\(\ds 2 a \map \cos {\dfrac {\size {\omega_1 - \omega_2} t - \epsilon} 2}\)




















\(\ds \)

\(=\)







\(\ds 2 a \map \cos {\dfrac {\size {2 \pi f_1 - 2 \pi f_2} t - \epsilon} 2}\)





Definition of Angular Frequency














\(\ds \)

\(=\)







\(\ds 2 a \map \cos {\pi \size {f_1 - f_2} t - \dfrac \epsilon 2}\)









Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): beats
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): beats




