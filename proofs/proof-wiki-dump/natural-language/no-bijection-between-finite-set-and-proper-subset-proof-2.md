# 

Source: https://proofwiki.org/wiki/No_Bijection_between_Finite_Set_and_Proper_Subset/Proof_2



Theorem
A finite set can not be in one-to-one correspondence with one of its proper subsets.
That is, a finite set is not Dedekind-infinite.


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

The set $\N_n = \set {0, 1, \ldots, n - 1}$ of natural numbers less than $n$ is equivalent to none of its proper subsets.

Here we use the definition of set equivalence to mean that $S$ is equivalent to $T$ if there exists a bijection between them.


Basis for the Induction
$\map P 1$ is the case:

The set $\N_1 = \set 0$ is equivalent to none of its proper subsets.
The only proper subset of $\set 0$ is the empty set $\O$, to which $\set 0$ is trivially not equivalent.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

The set $\N_k = \set {0, 1, \ldots, k - 1}$ is equivalent to none of its proper subsets.

Then we need to show:

The set $\N_{k + 1} = \set {0, 1, \ldots, k}$ is equivalent to none of its proper subsets.


Induction Step
Suppose that $\map P {k + 1}$ is not true.
Let $\phi: N_{k + 1} \to S$ be a bijection where $S \subsetneq N_{k + 1}$.
We aim to demonstrate that the existence of such a $\phi$ contradicts the induction hypothesis.

We consider two cases:


Case 1.
Let $S \subseteq N_k$.
Then we define the composite mapping $\phi \circ \phi$ defined as:

$\forall m \in \N_{k + 1}: \map {\paren {\phi \circ \phi} } m = \map \phi {\map \phi m}$
From Composite of Bijections is Bijection, $\phi \circ \phi$ is a bijection.
Now consider $T = \map {\paren {\phi \circ \phi} } {\N_{k + 1} }$, the image set of $\N_{k + 1}$ under $\phi \circ \phi$.
Let $m, t \in \N_{k + 1}$ such that:

$\map {\paren {\phi \circ \phi} } m = \map \phi t$
Since $\phi$ is an injection it follows that:

$\map \phi m = t$
As $S$ is a proper subset of $\N_{k + 1}$ it follows from Set Difference with Proper Subset that $\N_{k + 1} \setminus S \ne \O$.
Let $x \in \N_{k + 1} \setminus S$.
Suppose $\map \phi x \in T$.
Then that would mean that $\exists m \in \N_{k + 1}$ such that:

$\map {\paren {\phi \circ \phi} } m = \map \phi x$
which from above it would follow that:

$\map \phi m = x$
and so $x \in S$.
But this can not happen as $S \cap \paren {\N_{k + 1} \setminus S} = \O$ from Set Difference Intersection with Second Set is Empty Set.
So it must be the case that $\map \phi x \notin T$.
Thus it can be concluded that $\phi \circ \phi$ is a mapping from $\N_{k + 1}$ onto a proper subset $T$ of $S$.

Now, consider the mapping $\psi: \N_k \to U$ where $U$ is a proper subset of $\N_k$.
We define $\psi$ as follows:

$\forall a \in \N_k: \map \psi a = \begin {cases} a & : a \notin S = \map \phi {N_{k + 1} } \\ \map \phi a & : a \in S \end {cases}$

The next step is to show that $\psi$ is an injection.
Consider $a, b \in \N_k$ such that $\map \psi a = \map \psi b$.
Either $\map \psi a = \map \psi b \in \N_k \setminus S$, in which case:

$\map \psi a = a = \map \psi b = b$
or $\map \psi a = \map \psi b \in S$, in which case:

$\map \psi a = \map \phi a = \map \psi b = \map \phi b$
As $\phi$ is a injection it follows that $a = b$.
So $\map \psi a = \map \psi b \implies a = b$ and so by definition $\psi$ is an injection.

Now consider $\map \psi {\N_k}$.
We have that $\map \psi {\N_k} = \N_k \setminus \paren {S \setminus T}$ so that $\psi$ is an injection from $\N_k$ to a proper subset of itself.
This contradicts the induction hypothesis.


Case 2.
Let $S \nsubseteq N_k$.
This means that $k \in S$.
There exists $x \in \N_{k + 1}$ such that $\map \phi x = k$, as $\phi: \N_{k + 1} \to S$ is a surjection.
There also exists $y \in \N_{k + 1} \setminus S$ as $\N_{k + 1} \setminus S \ne \O$ from Set Difference with Proper Subset.
Let $\phi': \N_{k + 1} \to S$ be defined as:

$\map {\phi'} a = \begin {cases} \map \phi a : & a \ne x \\ y : & a = x \end {cases}$
As $\phi$ is a bijection it follows that $\phi': \N_{k + 1} \to S\,'$ is also a bijection, where:

$S\,' = \paren {S \setminus \set k} \cup \set y$
Proceeding as Case 1, we prove the same contradiction in the induction hypothesis.

Thus by Proof by Contradiction, the assumption that $\phi: N_{k + 1} \to S$ can be a bijection must be false.

So the truth of $\map P m$ for all $m \le k$ implies the proof of $\map P {k + 1}$.
The result follows by the Second Principle of Mathematical Induction.

Therefore:

For all $n \in \N$, the set $\N_n = \set {0, 1, \ldots, n - 1}$ of natural numbers less than $n$ is equivalent to none of its proper subsets.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.4$: Theorem $2.19$




