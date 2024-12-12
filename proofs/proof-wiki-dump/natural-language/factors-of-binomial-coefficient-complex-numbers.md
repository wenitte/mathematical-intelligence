# 

Source: https://proofwiki.org/wiki/Factors_of_Binomial_Coefficient/Complex_Numbers

Theorem
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $w$ an integer:

$\dbinom z w = \dfrac z w \dbinom {z - 1} {w - 1}$
where $\dbinom z w$ is a binomial coefficient.


Proof













\(\ds \dbinom z w\)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \dfrac {\Gamma \left({\zeta + 1}\right)} {\Gamma \left({\omega + 1}\right) \Gamma \left({\zeta - \omega + 1}\right)}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \dfrac {\zeta \Gamma \left({\zeta}\right)} {\omega \Gamma \left({\omega}\right) \Gamma \left({\zeta - \omega + 1}\right)}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\omega \mathop \to w} \dfrac \zeta \omega \dfrac {\Gamma \left({\left({\zeta - 1}\right) + 1}\right)} {\omega \Gamma \left({\left({\omega - 1}\right) + 1}\right) \Gamma \left({\left({\zeta - 1}\right) - \left({\omega - 1}\right) + 1}\right)}\)





rearrangement














\(\ds \)

\(=\)







\(\ds \dfrac z w \dbinom {z - 1} {w - 1}\)





Definition of Binomial Coefficient



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $42$ (Solution)




