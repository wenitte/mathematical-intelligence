# 

Source: https://proofwiki.org/wiki/General_Morphism_Property_for_Semigroups



Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be semigroups.
Let $\phi: S \to T$ be a homomorphism.

Then:

$\forall s_k \in S: \map \phi {s_1 \circ s_2 \circ \cdots \circ s_n} = \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_n}$

Hence it follows that:

$\forall n \in \N_{>0}: \forall s \in S: \map \phi {s^n} = \paren {\map \phi s}^n$


Proof
$\forall s_k \in S: \map \phi {s_1 \circ s_2 \circ \cdots \circ s_n} = \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_n}$ can be proved by induction.

For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\map \phi {s_1 \circ s_2 \circ \cdots \circ s_n} = \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_n}$

$P(1)$ is true, as this just says:

$\map \phi {s_1} = \map \phi {s_1}$.


Basis for the Induction
$P(2)$ is the case:

$\map \phi {s_1 \circ s_2} = \map \phi {s_1} * \map \phi {s_2}$
This follows from the fact that $\phi$ is a homomorphism.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\map \phi {s_1 \circ s_2 \circ \cdots \circ s_k} = \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_k}$

Then we need to show:

$\map \phi {s_1 \circ s_2 \circ \cdots \circ s_k \circ s_{k + 1} } = \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_k} * \map \phi {s_{k + 1} }$


Induction Step
This is our induction step:














\(\ds \map \phi {s_1 \circ s_2 \circ \cdots \circ s_k \circ s_{k + 1} }\)

\(=\)







\(\ds \map \phi {s_1 \circ s_2 \circ \cdots \circ s_k} * \map \phi {s_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_k} * \map \phi {s_{k + 1} }\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\map \phi {s_1 \circ s_2 \circ \cdots \circ s_n} = \map \phi {s_1} * \map \phi {s_2} * \cdots * \map \phi {s_n}$

The result for $n \in \N_{>0}$ follows directly from the above, by replacing each occurrence of $s_k$ with $s$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 7.2$. Some lemmas on homomorphisms: Example $133$




