# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Odd_Function



Theorem
Let $f$ be an odd function with a primitive on the open interval $\closedint {-a} a$, where $a > 0$.

Then:

$\ds \int_{-a}^a \map f x \rd x = 0$


Corollary
Let $f$ be an odd function with a primitive on the open interval $\openint {-a} a$, where $a > 0$.

Then the improper integral of $f$ on $\openint {-a} a$ is:

$\ds \int_{\mathop \to -a}^{\mathop \to a} \map f x \rd x = 0$


Proof
Let $F$ be a primitive for $f$ on the interval $\closedint {-a} a$.
Then, by Sum of Integrals on Adjacent Intervals for Integrable Functions, we have:














\(\ds \int_{-a}^a \map f x \rd x\)

\(=\)







\(\ds \int_{-a}^0 \map f x \rd x + \int_0^a \map f x \rd x\)









Therefore, it suffices to prove that:

$\ds \int_{-a}^0 \map f x \rd x = -\int_0^a \map f x \rd x$

To this end, let $\phi: \R \to \R$ be defined by $x \mapsto -x$. 
From Derivative of Identity Function and Derivative of Constant Multiple, for all $x \in \R$, we have $\map {\phi'} x = -1$.
Then, by means of Integration by Substitution, we compute:














\(\ds \int_{\map \phi a}^{\map \phi 0} \map f x \rd x\)

\(=\)







\(\ds \int_a^0 \map f {-u} \paren {-1} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_0^a \map f {-u} \rd u\)





Definition of Definite Integral














\(\ds \)

\(=\)







\(\ds \int_0^a \map f {-x} \rd x\)





Renaming integration variable














\(\ds \)

\(=\)







\(\ds -\int_0^a \map f x \rd x\)





$f$ is an odd function



This concludes the proof.
$\blacksquare$


Also see
Definite Integral of Even Function


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $\S 4.5$




