# 

Source: https://proofwiki.org/wiki/Extend_Theory_to_Satisfy_Witness_Property



Theorem
Let $\LL$ be a language of predicate logic.
Let $T$ be a set of $\LL$-sentences.

Then there exists a language $\LL^*$ and a set of $\LL^*$-sentences $T^*$ satisfying the following properties:

$T^*$ is finitely satisfiable if and only if $T$ is finitely satisfiable.
If $T^*$ is satisfiable, then $T$ is also.
For every $\LL^*$-WFF of $1$ free variable $\map \phi x$, there exists some constant $c_\phi$ such that:
$T^* \models \paren {\exists x: \map \phi x} \implies \map \phi {x := c_\phi}$
$T^*$ satisfies the witness property.


Lemma
Let $\LL$ be a language of predicate logic.
Let $\FF$ be a set of $\LL$-sentences.
Suppose that, for every $\LL$-WFF $\phi$ of $1$ free variable $x$:

There exists some term $t_\phi$ containing no variables such that:
$\paren {\exists x : \map \phi x} \implies \map \phi {x := t_\phi}$
is an element of $\FF$.

Then $\FF$ satisfies the witness property.
$\Box$


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
We will recursively define a sequence of languages.
Define:

$\LL_0 := \LL$
Let the set of predicates in $\LL$ be $\PP$.
Let the set of functions in $\LL$ be $\FF = \set {\KK, \FF_1, \FF_2, \dotsc}$.
For every $i \in \N$, define:

$\Phi_i$ as the set of $\LL_i$-WFFs of $1$ free variable.
$\KK_i$ as the set of constants in $\LL_i$.
$\LL_{i + 1}$ as the language of predicate logic with:
Predicates $\PP$.
Functions $\set {\KK_i \cup \Phi_i, \FF_1, \dotsc}$.
Define:

$\ds \LL^* = \bigcup_{i \mathop \in \N} \LL_i$
$T^* = T \cup \set {\sqbrk {\paren {\exists x : \map \phi x} \implies \map \phi {x := \phi}} : \phi \in \Phi}$
where $\Phi$ is the set of $\LL^*$-WFFs of $1$ free variable.
It remains to show that all of the stated properties hold.


Satisfiability
As $T \subseteq T^*$, it is trivial that:

$T^*$ finitely satisfiable implies $T$ finitely satisfiable.
$T^*$ satisfiable implies $T$ satisfiable.
$\Box$
We now show that $T$ finitely satisfiable implies $T^*$ finitely satisfiable.
Proceed by mathematical induction to show that:

$T_i = T^* \cap \LL_i$
is finitely satisfiable for every $i \in \N$.
By assumption, $T_0 = T$ is finitely satisfiable.

Suppose that, for $i \in \N$, $T_i$ is finitely satisfiable.
Let $P$ be an arbitrary finite subset of $T_{i + 1}$.
Let $P_L = P \cap T_i$ and $P_K = P \setminus T_i$.
As $P_L$ is a finite subset of $T_i$, then by assumption there is some $\LL_i$-structure $\MM = \tuple {M, F, P}$ such that:

$\MM \models_{\mathrm{PL}} P_L$
By definition of $T_{i + 1}$, each $\psi \in P_K$ is of the form:

$\paren {\exists x : \map \phi x} \implies \map \phi {x := \phi}$
for some $\LL_i$-WFF $\phi$ of $1$ free variable.
Let $Q$ be the set of all of those $\phi$ where the expression above appears in $P_K$.
Let $Q' = \set {\phi \in Q : \MM \models_{\mathrm{PL}} \exists x : \map \phi x}$
For each $\phi \in Q'$, by definition of $\mathrm{PL}$:

There exists some $a \in M$ such that $\map {\operatorname{val}_\MM} \phi \sqbrk {\paren {x / a}} = \top$
As $Q'$ is finite, by the Principle of Finite Choice, there exists a mapping $g : Q' \to M$ such that:

$\forall \phi \in Q': \map {\operatorname{val}_\MM} \phi \sqbrk {\paren {x / \map g \phi}} = \top$
As $M$ is non-empty, let $z \in M$ be arbitrary.
Define $\MM' = \tuple {M, F \cup \set {G_\phi : \phi \in Q'} \cup \set {Z_\phi : \phi \in \Phi_i \setminus Q'}, P}$, where:

$\map {G_\phi} {} = \map g \phi$
$\map {Z_\phi} {} = z$
Each $\psi \in P_L$ is modeled by $\MM'$, since the value depends only on symbols contained in $L_i$.
For each $\phi \in Q'$, $\map \phi {x := \phi}$ is modeled by $\MM'$, as follows from the definition of $g$.
Thus, for each $\psi \in P_K$ either:

The corresponding $\phi$ is in $Q'$, in which case the right hand side of the conditional is valid.
The corresponding $\phi$ is not in $Q'$, in which case the left hand side of the conditional is not valid.
In either case, based on the truth function of conditional, the complete $\psi$ is valid.
Thus,

$\MM' \models_{\mathrm{PL}} P$
$\Box$
Every finite subset of $T^*$ is contained in some $T_i$, so $T^*$ is finitely satisfiable.


Witness Property
By definition of $T^*$, that:

$T^* \models \paren {\exists x: \map \phi x} \implies \map \phi {x := \phi}$
holds for every $\LL^*$-WFF of $1$ free variable $\map \phi x$.
Because of how $\LL^*$ is defined, $\phi$ is also a constant in $\LL^*$, and plays the role of $c_\phi$ in the theorem statement.
$\Box$

That $T^*$ satisfies the witness property follows immediately from the lemma.
$\blacksquare$





