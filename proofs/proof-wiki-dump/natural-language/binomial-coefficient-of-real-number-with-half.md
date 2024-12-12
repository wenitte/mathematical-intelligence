# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_of_Real_Number_with_Half

Theorem
$\dbinom r {1 / 2} = \dfrac {2^{2 r + 1} } {\dbinom {2 r} r \pi}$
where $\dbinom r {1 / 2}$ denotes a binomial coefficient.


Proof













\(\ds \dbinom r {1 / 2}\)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {\map \Gamma {\rho + 1} } {\map \Gamma {\frac 1 2 + 1} \map \Gamma {\rho - \frac 1 2 + 1} }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {\map \Gamma {\rho + 1} } {\frac 1 2 \map \Gamma {\frac 1 2} \map \Gamma {\rho + \frac 1 2} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2 \map \Gamma {\rho + 1} } {\sqrt \pi \, \map \Gamma {\rho + \frac 1 2} }\)





Gamma Function of One Half




Legendre's Duplication Formula gives:

$\forall z \notin \set {-\dfrac n 2: n \in \N}: \map \Gamma z \map \Gamma {z + \dfrac 1 2} = 2^{1 - 2 z} \sqrt \pi \, \map \Gamma {2 z}$
and so:

$(1): \quad \map \Gamma {\rho + \dfrac 1 2} = \dfrac {2^{1 - 2 \rho} \sqrt \pi \, \map \Gamma {2 \rho} } {\map \Gamma \rho}$

Hence:














\(\ds \dbinom r {1 / 2}\)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2 \map \Gamma {\rho + 1} } {\sqrt \pi \, \dfrac {2^{1 - 2 \rho} \sqrt \pi \, \map \Gamma {2 \rho} } {\map \Gamma \rho} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2 \map \Gamma {\rho + 1} \map \Gamma \rho} {\pi 2^{1 - 2 \rho} \map \Gamma {2 \rho} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2^{2 \rho - 1} 2 \map \Gamma {\rho + 1} \map \Gamma \rho} {\pi \map \Gamma {2 \rho} }\)





rearranging and simplifying














\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2^{2 \rho} } {\pi \dfrac {\map \Gamma {2 \rho} } {\map \Gamma \rho \map \Gamma {\rho + 1} } }\)





rearranging














\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2^{2 \rho} } {\pi \dfrac {\rho \map \Gamma {2 \rho + 1} } {2 \rho \map \Gamma {\rho + 1} \map \Gamma {\rho + 1} } }\)





Gamma Difference Equation twice














\(\ds \)

\(=\)







\(\ds \lim_{\rho \mathop \to r} \dfrac {2^{2 \rho + 1} } {\pi \dfrac {\map \Gamma {2 \rho + 1} } {\map \Gamma {\rho + 1} \map \Gamma {\rho + 1} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {2^{2 r + 1} } {\dbinom {2 r} r \pi}\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $44$




