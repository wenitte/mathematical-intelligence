# 

Source: https://proofwiki.org/wiki/Primitives_which_Differ_by_Constant



Theorem
Let $F$ be a primitive for a real function $f$ on the closed interval $\closedint a b$.
Let $G$ be a real function defined on $\closedint a b$.

Then $G$ is a primitive for $f$ on $\closedint a b$ if and only if:

$\exists c \in \R: \forall x \in \closedint a b: \map G x = \map F x + c$

That is, if and only if $F$ and $G$ differ by a constant on the whole interval.


Corollary
Let $f$ be an integrable function on the closed interval $\closedint a b$.
Then there exist an uncountable number of primitives for $f$ on $\closedint a b$.


Proof
Necessary Condition
Suppose $G$ is a primitive for $f$.
Then $F - G$ is continuous on $\closedint a b$, differentiable on $\openint a b$, and for any $x \in \openint a b$, we have:














\(\ds \map {D_x} {\map F x - \map G x}\)

\(=\)







\(\ds \map {D_x} {\map F x} - \map {D_x} {\map G x}\)





Sum Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map f x - \map f x\)





$F, G$ are a primitives for $f$














\(\ds \)

\(=\)







\(\ds 0\)










From Zero Derivative implies Constant Function it follows that $F - G$ is constant on $\closedint a b$.
Hence the result.
$\Box$


Sufficient Condition
Now suppose $\map G x = \map F x + c$.
We compute:














\(\ds D_x \map G x\)

\(=\)







\(\ds \map {D_x} {\map F x + c}\)




















\(\ds \)

\(=\)







\(\ds \map {D_x} {\map F x} + 0\)





Sum Rule for Derivatives and Derivative of Constant














\(\ds \)

\(=\)







\(\ds \map f x\)





$F$ is a primitive for $f$




Hence $G$ is also a primitive for $f$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Definition of an Indefinite Integral
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.11$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): integration
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): integration




