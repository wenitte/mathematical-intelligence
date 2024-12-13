# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_x_minus_Gamma_of_Reciprocal_of_x



Theorem
  
$\ds \lim_{x \mathop \to \infty} \paren {x - \map \Gamma {\dfrac 1 x} } = \gamma$
where:

$\Gamma$ denotes the $\Gamma$ (Gamma) function
$\gamma$ denotes the Euler-Mascheroni constant.


Proof













\(\ds \lim_{x \mathop \to \infty} \paren {x - \map \Gamma {\frac 1 x} }\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \paren {\frac 1 x - \map \Gamma x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \paren {\frac 1 x - \frac {\map \Gamma {x + 1} } x}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \paren {\frac {\map \Gamma 1 - \map \Gamma {1 + x} } x}\)





$\map \Gamma 1 = 1$ as Gamma Function Extends Factorial














\(\ds \)

\(=\)







\(\ds -\map {\Gamma'} 1\)





Definition of Derivative














\(\ds \)

\(=\)







\(\ds \gamma\)





Derivative of Gamma Function at 1



$\blacksquare$


Historical Note
François Le Lionnais and Jean Brette, in their Les Nombres Remarquables of $1983$, attribute this to a $1976$ result of K. Demys, but this has not been corroborated.


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,57721 56649 \ldots$




