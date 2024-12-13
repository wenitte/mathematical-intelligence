# 

Source: https://proofwiki.org/wiki/Product_of_Strictly_Negative_Element_with_Strictly_Positive_Element_is_Strictly_Negative

Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain, whose (strict) positivity property is denoted $P$.
Let $N$ be the (strict) negativity property on $D$:

$\forall a \in D: \map N a \iff \map P {-a}$

Then for all $a \in D$:

$\map N a, \map P b \implies \map N {a \times b}$


Proof













\(\ds \map N a, \map P b\)

\(\leadsto\)







\(\ds \map P {-a}, \map P b\)





Definition of Strict Negativity Property














\(\ds \)

\(\leadsto\)







\(\ds \map P {\paren {-a} \times b}\)





Strict Positivity Property: $(P \, 2)$














\(\ds \)

\(\leadsto\)







\(\ds \map P {-\paren {a \times b} }\)





Product with Ring Negative














\(\ds \)

\(\leadsto\)







\(\ds \map N {a \times b}\)





Definition of Strict Negativity Property



$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Theorem $10 \ \text {(v)}$




