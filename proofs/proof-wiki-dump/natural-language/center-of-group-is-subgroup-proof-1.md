# 

Source: https://proofwiki.org/wiki/Center_of_Group_is_Subgroup/Proof_1



Theorem
Let $G$ be a group.
The center $\map Z G$ of $G$ is a subgroup of $G$.


Proof
For brevity, suppress the symbol for the group operation (which may be $\circ$, or $+$).
Apply the Two-Step Subgroup Test:


Condition $(1)$
By the definition of identity, $e g = g e = g$ for all $g \in G$.
So, $e \in \map Z G$, meaning $\map Z G$ is non-empty.
$\Box$


Condition $(2)$
Suppose $a, b \in \map Z G$.
Using the associative property and the definition of center, we have:











\(\ds \forall g \in G: \, \)



\(\ds \paren {a b} g\)

\(=\)







\(\ds a \paren {b g}\)





Definition of Associative Operation














\(\ds \)

\(=\)







\(\ds a \paren {g b}\)





Definition of Center of Group














\(\ds \)

\(=\)







\(\ds \paren {a g} b\)





Definition of Associative Operation














\(\ds \)

\(=\)







\(\ds \paren {g a} b\)





Definition of Center of Group














\(\ds \)

\(=\)







\(\ds g \paren {a b}\)





Definition of Associative Operation




Thus, $a b \in \map Z G$.
$\Box$


Condition $(3)$
Suppose $c \in \map Z G$. Then:














\(\ds c\)

\(\in\)







\(\ds \map Z G\)














\(\ds \leadsto \ \ \)

\(\ds \forall g \in G: \, \)



\(\ds c g\)

\(=\)







\(\ds g c\)





Definition of Center of Group








\(\ds \leadsto \ \ \)





\(\ds c^{-1} \paren {c g} c^{-1}\)

\(=\)







\(\ds c^{-1} \paren {g c} c^{-1}\)





Group Axiom $\text G 0$: Closure








\(\ds \leadsto \ \ \)





\(\ds \paren {c^{-1} c} g c^{-1}\)

\(=\)







\(\ds c^{-1} g \paren {c c^{-1} }\)





Definition of Associative Operation








\(\ds \leadsto \ \ \)





\(\ds e g c^{-1}\)

\(=\)







\(\ds c^{-1} g e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g c^{-1}\)

\(=\)







\(\ds c^{-1} g\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds c^{-1}\)

\(\in\)







\(\ds \map Z G\)





Definition of Center of Group



$\Box$

Therefore:

$\map Z G \le G$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 37.2$ Some important general examples of subgroups




