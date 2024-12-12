# 

Source: https://proofwiki.org/wiki/Frequency_of_Beats

Theorem
Let $W_1$ and $W_2$ be harmonic waves whose frequencies are $f_1$ and $f_2$.
Let the superpositon of $W_1$ onto $W_2$ exhibit the phenomenon of beats.
The frequency $f_b$ of those beats is:

$f_b = \size {f_2 - f_1}$


Proof
Let $\omega_1$ and $\omega_2$ denote the angular frequency of $W_1$ and $W_2$ respectively.
Let us consider the harmonic waves that are $W_1$ and $W_2$ as they disturb the medium at $x = 0$.
Without loss of generality, therefore, let $W_1$ and $W_2$ be be expressed as:














\(\ds \map {\phi_1} t\)

\(=\)







\(\ds \sin \omega_1 t\)




















\(\ds \map {\phi_2} t\)

\(=\)







\(\ds \sin \omega_2 t\)









where:














\(\ds \omega_1\)

\(=\)







\(\ds 2 \pi f_1\)





Definition of Angular Frequency














\(\ds \omega_2\)

\(=\)







\(\ds 2 \pi f_2\)










Then:














\(\ds \map {\phi_1} t + \map {\phi_2} t\)

\(=\)







\(\ds \sin \omega_1 t + \sin \omega_2 t\)





superimposing the two waves














\(\ds \)

\(=\)







\(\ds 2 \map \sin {\dfrac {\omega_1 t + \omega_2 t} 2} \map \cos {\dfrac {\omega_1 t - \omega_2 t} 2}\)





Sine plus Sine














\(\ds \)

\(=\)







\(\ds 2 \map \sin {\dfrac {\paren {\omega_1 + \omega_2} t} 2} \map \cos {\dfrac {\paren {\omega_1 - \omega_2} t} 2}\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 \map \sin {\dfrac {\paren {\omega_1 + \omega_2} t} 2} \map \cos {\dfrac {\size {\omega_1 - \omega_2} t} 2}\)





Cosine Function is Even




Hence the superimposition of the two waves is equivalent to forming the product of the waves of frequency $\dfrac {\omega_1 + \omega_2} 2$ and $\dfrac {\size {\omega_1 - \omega_2} } 2$.


In the above diagram, there are $3$ waves superimposed:

$(1) \quad \pm 2 \map \cos {\dfrac {\size {\omega_1 - \omega_2} t} 2}$ in red
$(2) \quad 2 \map \sin {\dfrac {\paren {\omega_1 + \omega_2} t} 2}$ in green
$(3) \quad 2 \map \sin {\dfrac {\paren {\omega_1 + \omega_2} t} 2} \map \cos {\dfrac {\size {\omega_1 - \omega_2} t} 2}$ in blue

Hence we see:














\(\ds \size {\map {\phi_1} t + \map {\phi_2} t}\)

\(\le\)







\(\ds \size {2 \map \cos {\dfrac {\size {\omega_1 - \omega_2} t} 2} }\)





as $\map \sin {\dfrac {\paren {\omega_1 + \omega_2} t} 2} \le 1$ throughout




Hence the angular frequency $\omega_b$ of the slower component is seen to be:

$\omega_b = \dfrac {\size {\omega_1 - \omega_2} } 2$
By definition of angular frequency:














\(\ds f_b\)

\(=\)







\(\ds \dfrac {\omega_b} {2 \pi}\)





Definition of Angular Frequency














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \dfrac {\size {\omega_1 - \omega_2} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {\frac {\omega_1} {2 \pi} - \frac {\omega_2} {2 \pi} } } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\size {f_1 - f_2} } 2\)










Hence the frequency of the slower component is seen to be:

$\dfrac {\size {f_1 - f_2} } 2$
Finally we note that the beats themselves occur at the peaks and troughs of the slower component.
That is, the frequency $f_b$ of those beats is twice $\dfrac {\size {f_1 - f_2} } 2$.
The result is apparent.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): beats
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): beats




