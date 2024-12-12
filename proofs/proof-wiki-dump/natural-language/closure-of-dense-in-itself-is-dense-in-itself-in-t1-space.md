# 

Source: https://proofwiki.org/wiki/Closure_of_Dense-in-itself_is_Dense-in-itself_in_T1_Space

Theorem
Let $T$ be a $T_1$ topological space.
Let $A \subseteq T$. 
Let $A$ be dense-in-itself.

Then the closure $A^-$ of $A$ is also dense-in-itself.


Proof
Let $A$ be dense-in-itself.
Then by Dense-in-itself iff Subset of Derivative:

$(1): \quad A \subseteq A'$
where $A'$ denotes the derivative of $A$.
By Derivative of Derivative is Subset of Derivative in $T_1$ Space:

$(2): \quad A \subseteq A'$
By Dense-in-itself iff Subset of Derivative it is sufficient to proof that:

$A^- \subseteq \left({A^-}\right)'$
Thus:














\(\ds \left({A^-}\right)'\)

\(=\)







\(\ds \left({A \cup A'}\right)'\)





Closure Equals Union with Derivative














\(\ds \)

\(=\)







\(\ds A' \cup A\)





Derivative of Union is Union of Derivatives














\(\ds \)

\(=\)







\(\ds A'\)





$(2)$ and Union with Superset is Superset














\(\ds \)

\(=\)







\(\ds A \cup A'\)





$(1)$ and Union with Superset is Superset














\(\ds \)

\(=\)







\(\ds A^-\)





Closure Equals Union with Derivative



$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TOPGEN_1:36




