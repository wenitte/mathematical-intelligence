# 

Source: https://proofwiki.org/wiki/Homomorphism_of_Powers/Naturally_Ordered_Semigroup



Theorem
Let $\struct {T_1, \odot}$ and $\struct {T_2, \oplus}$ be semigroups.
Let $\phi: \struct {T_1, \odot} \to \struct {T_2, \oplus}$ be a (semigroup) homomorphism.

Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.
For a given $a \in T_1$, let $\map {\odot^n} a$ be the $n$th power of $a$ in $T_1$.
For a given $a \in T_2$, let $\map {\oplus^n} a$ be the $n$th power of $a$ in $T_2$.
Then:

$\forall a \in T_1: \forall n \in \struct {S^*, \circ, \preceq}: \map \phi {\map {\odot^n} a} = \map {\oplus^n} {\map \phi a}$
where $S^* = S \setminus \set 0$.


Proof
The proof proceeds by the Principle of Mathematical Induction for a Naturally Ordered Semigroup.

Let $A := \set {n \in S^*: \forall a \in T_1: \map \phi {\map {\odot^n} a} = \map {\oplus^n} {\map \phi a} }$
That is, $A$ is defined as the set of all $n$ such that:

$\forall a \in T_1 \map \phi {\map {\odot^n} a} = \map {\oplus^n} {\map \phi a}$


Basis for the Induction
We have that:














\(\ds \map \phi {\map {\odot^1} a}\)

\(=\)







\(\ds \map \phi a\)





Definition of Power of Element of Magma














\(\ds \)

\(=\)







\(\ds \map {\oplus^1} {\map \phi a}\)





Definition of Power of Element of Magma



So $1 \in A$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $k \in A$ where $k \ge 1$, then it logically follows that $k \circ 1 \in A$.

So this is our induction hypothesis:

$\forall a \in T_1: \map \phi {\map {\odot^k} a} = \map {\oplus^k} {\map \phi a}$

Then we need to show:

$\forall a \in T_1: \map \phi {\map {\odot^{k \circ 1} } a} = \map {\oplus^{k \circ 1} } {\map \phi a}$


Induction Step
This is our induction step:














\(\ds \map \phi {\map {\odot^{k \circ 1} } a}\)

\(=\)







\(\ds \map \phi {\paren {\map {\odot^k} a} \odot a}\)





Definition of Power of Element of Magma














\(\ds \)

\(=\)







\(\ds \paren {\map \phi {\map {\odot^k} a} } \oplus \paren {\map \phi a}\)





Definition of Semigroup Homomorphism














\(\ds \)

\(=\)







\(\ds \paren {\map {\oplus^k} {\map \phi a} } \oplus \paren {\map \phi a}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map {\oplus^{k \circ 1} } {\map \phi a}\)





Definition of Power of Element of Magma



So $k \in A \implies k \circ 1 \in A$ and the result follows by the Principle of Mathematical Induction:

$\forall n \in \struct {S^*, \circ, \preceq}: \map \phi {\map {\odot^n} a} = \map {\oplus^n} {\map \phi a}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.14$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.28 \ \text {(a)}$




