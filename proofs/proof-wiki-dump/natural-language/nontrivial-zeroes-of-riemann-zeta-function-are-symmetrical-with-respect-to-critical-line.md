# 

Source: https://proofwiki.org/wiki/Nontrivial_Zeroes_of_Riemann_Zeta_Function_are_Symmetrical_with_respect_to_Critical_Line



Theorem
The nontrivial zeroes of the Riemann $\zeta$ function are distributed symmetrically with respect to the  critical line.
That is, suppose $s_1 = \sigma_1 + i t$ is a nontrivial zero of $\map \zeta s$.
Then there exists another nontrivial zero $s_2$ of $\map \zeta s$ such that:

$s_2 = 1 - s_1$


Proof
From Functional Equation for Riemann Zeta Function, we have:

$\ds \pi^{-s/2} \map \Gamma {\dfrac s 2} \map \zeta s = \pi^{\paren {s/2 - 1/2 } } \map \Gamma {\dfrac {1 - s} 2} \map \zeta {1 - s}$

We suppose $s_1 = \sigma_1 + i t$ is a nontrivial zero of $\map \zeta s$.
Then we have:














\(\ds \map \zeta {s_1}\)

\(=\)







\(\ds 0\)




















\(\ds \pi^{-s_1/2 } \map \Gamma {\dfrac {s_1} 2} \map \zeta {s_1}\)

\(=\)







\(\ds 0\)





left hand side














\(\ds \pi^{\paren {s_1/2 - 1/2 } } \map \Gamma {\dfrac {1 - s_1} 2} \map \zeta {1 - s_1}\)

\(=\)







\(\ds 0\)





right hand side




It remains to be shown that of the three terms on the right hand side, $\map \zeta {1 - s_1}$ MUST equal zero.
We can rewrite the first term in terms of the exponential function

$\ds \pi^{\paren {s_1 / 2 - 1 / 2} } = \map \exp {\map \ln {\pi^{\paren {s_1 / 2 - 1 / 2} } } }$

From the definition of the exponential function, we know $\map \exp {\map \ln {\pi^{\paren { {s_1}/2 - 1/2 } } }}$ never equals zero.
From Zeroes of Gamma Function, we know $\map \Gamma {\dfrac {1 - s_1} 2}$ never equals zero.
Therefore:

$\map \zeta {1 - s_1} = 0$
$\blacksquare$


Also see
Riemann Hypothesis: If this is true, all nontrivial zeroes are already on the critical line.


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,5$




