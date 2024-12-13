# 

Source: https://proofwiki.org/wiki/Irreducible_Subspace_is_Contained_in_Irreducible_Component



Theorem
Let $T = \struct {S_1, \tau}$ be a non-empty topological space.
Let $S_2$ be an irreducible subset of $S_1$.

Then there exists an irreducible component $S_3$ of $T$ such that $S_2 \subseteq S_3$.


Outline of Proof
We apply Zorn's Lemma to the set of irreducible subspaces, ordered by the subset relation.


Proof
By definition, an irreducible component of $X$ is an irreducible subspace that is maximal among the irreducible subspaces, ordered by the subset relation.

Consider the ordered set $\struct {\AA, \subseteq}$, where:

$\AA := \leftset {S : S}$ is an irreducible subset of $S_1$ such that $\rightset {S_2 \subseteq S}$
We need to show that $\AA$ has a maximal element.

As $S_2 \in \AA$, we have $\AA \ne \O$.
Thus, in view of Zorn's Lemma, it suffices to show:

each non-empty chain in $\AA$ has an upper bound in $\AA$.

Let $C$ be a non-empty chain in $\AA$.
Let:

$M := \bigcup C$
We now show that $M$ is an upper bound of $C$.
By construction of $M$, it suffices to show:

$M \in \AA$

As $C \subseteq \AA$, we have:

$S_2 \subseteq M$
So, if remains to show that $M$ is an irreducible subset of $S_1$.

Let $U, V$ are non-empty open sets of $\struct {M, \tau_M}$.
In view of the definition of irreducible space, we need to show:

$U \cap V \ne \O$

By definition of $\tau_M$, there are $U_1, V_1 \in \tau$ such that:

$U = U_1 \cap M$
and:

$V = V_1 \cap M$
Since:

$\bigcup _{N \in C} \paren {U_1 \cap N} = U_1 \cap M \ne \O$
there exists $N_U \in C$ such that:

$U_1 \cap N_U \ne \O$
Similarly, there exists $N_V \in C$ such that:

$V_1 \cap N_V \ne \O$
As $C$ is a chain, we have either:

$N_U \subseteq N_V$ or $N_V \subseteq N_U$
Without loss of generality, suppose:

$N_U \subseteq N_V$
Let:

$U' := U_1 \cap N_V$
and:

$V' := V_1 \cap N_V$
Then $U', V'$ are non-empty open sets of $N_V$.
Since $N_V$ is irreducible, we have:

$U' \cap V' \ne \O$
This implies:

$U \cap V \ne \O$
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Also see
Point is Contained in Irreducible Component




