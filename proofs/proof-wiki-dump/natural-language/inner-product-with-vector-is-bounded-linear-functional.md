# 

Source: https://proofwiki.org/wiki/Inner_Product_with_Vector_is_Bounded_Linear_Functional

Theorem
Let $\GF$ be a subfield of $\C$.
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over $\GF$.
Let $v_0 \in V$.

Then the mapping $L: V \to \GF$ defined by:

$\map L v := \innerprod v {v_0}$
is a bounded linear functional with norm equal to $\norm {v_0}$.


Proof
By Inner Product with Vector is Linear Functional, $L$ is a linear functional.
To check that $L$ is bounded:














\(\ds \cmod {\map L v}\)

\(=\)







\(\ds \cmod {\innerprod v {v_0} }\)




















\(\ds \)

\(\le\)







\(\ds \norm v \norm {v_0}\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces



Thus $L$ is bounded by $\norm {v_0}$.

Furthermore, note:

$\map L {v_0} = \innerprod {v_0} {v_0} = \norm {v_0}^2$
so that indeed $\norm {v_0}$ is the norm of $L$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 3.$ The Riesz Representation Theorem




