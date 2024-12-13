# 

Source: https://proofwiki.org/wiki/Self-Distributive_Quasigroup_with_at_least_Two_Elements_is_not_Associative

Theorem
Let $\struct {S, \odot}$ be a self-distributive quasigroup.
Let $S$ have at least $2$ elements.

Then $\odot$ is not an associative operation.


Proof
Aiming for a contradiction, suppose $\odot$ is associative operation.
Let $a, b \in S$ such that $a \ne b$.
Then:










\(\ds \forall a, b \in S: \, \)



\(\ds \paren {a \odot a} \odot \paren {a \odot b}\)

\(=\)







\(\ds a \odot \paren {a \odot b}\)





Definition of Self-Distributive Structure














\(\ds \)

\(=\)







\(\ds \paren {a \odot a} \odot b\)





Definition of Associative Operation














\(\ds \)

\(=\)







\(\ds \paren {a \odot b} \odot \paren {a \odot b}\)





Definition of Self-Distributive Structure








\(\ds \leadsto \ \ \)





\(\ds a \odot a\)

\(=\)







\(\ds a \odot b\)





Definition of Quasigroup








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)





Definition of Quasigroup



which contradicts our supposition that $a \ne b$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.21 \ \text{(d)}$




