# 

Source: https://proofwiki.org/wiki/Prime_Number_Theorem_in_Eulerian_Logarithmic_Integral_Form

Theorem
The Prime Number Theorem is equivalent to:

$\ds \lim_{x \mathop \to \infty} \frac {\map \pi x} {\map \Li x} = 1$
where:

$\map \pi x$ is the prime-counting function
$\map \Li x$ is the Eulerian logarithmic integral:
$\ds \map \Li x := \int_2^x \dfrac {\d t} {\ln t}$


Proof
Using Integration by Parts:














\(\ds \map \Li x\)

\(=\)







\(\ds \int_2^x \dfrac {\d t} {\ln t}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac x {\ln x} - \dfrac 2 {\ln 2} + \int_2^x \dfrac {\d t} {\paren {\ln t}^2}\)









We have that $\dfrac 1 {\paren {\ln t}^2}$ is positive and decreasing for $t > 1$.
Let $x \ge 4$.
Then:














\(\ds 0\)

\(<\)







\(\ds \int_2^x \dfrac {\d t} {\paren {\ln t}^2}\)




















\(\ds \)

\(=\)







\(\ds \int_2^{\sqrt x} \dfrac {\d t} {\paren {\ln t}^2} + \int_{\sqrt x}^x \dfrac {\d t} {\paren {\ln t}^2}\)




















\(\ds \)

\(<\)







\(\ds \dfrac {\sqrt x - 2} {\paren {\ln 2}^2} + \dfrac {x - \sqrt x} {\paren {\ln \sqrt x}^2}\)




















\(\ds \)

\(<\)







\(\ds \dfrac {\sqrt x} {\paren {\ln 2}^2} + \dfrac {4 x} {\paren {\ln \sqrt x}^2}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \dfrac {\ds \int_2^x \frac {\d t} {\paren {\ln t}^2} } {x / \ln x}\)




















\(\ds \)

\(<\)







\(\ds \dfrac {\ln x} {\sqrt x \paren {\ln 2}^2} + \frac 4 {\ln x}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \lim_{x \mathop \to \infty} \dfrac {\ds \int_2^x \frac {\d t} {\paren {\ln t}^2} } {x / \ln x}\)

\(=\)







\(\ds 0\)









Then:














\(\ds \frac {\map \Li x} {x / \ln x}\)

\(=\)







\(\ds \dfrac {\dfrac x {\ln x} - \dfrac 2 {\ln 2} + \ds \int_2^x \dfrac {\d t} {\paren {\ln t}^2} } {x / \ln x}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 1 - \dfrac {2 \ln x} {x \ln 2} + \dfrac {\ds \int_2^x \frac {\d t} {\paren {\ln t}^2} } {x / \ln x}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{x \mathop \to \infty} \frac {\map \Li x} {x / \ln x}\)

\(=\)







\(\ds 1 - \lim_{x \mathop \to \infty} \dfrac 2 {\ln 2} \dfrac x {\ln x} - 0\)





from $(2)$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \lim_{x \mathop \to \infty} \frac {\map \Li x} {x / \ln x}\)

\(=\)







\(\ds 1\)





as $\ds \lim_{x \mathop \to \infty} \dfrac x {\ln x} = 0$




Then:














\(\ds \lim_{x \mathop \to \infty} \frac {\map \pi x} {x / \ln x}\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \frac {\map \pi x} {\map \Li x} \frac {\map \Li x} {x / \ln x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \frac {\map \pi x} {\map \Li x}\)





from $(3)$



$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.16$: The Sequence of Primes




