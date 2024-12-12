# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Lemma



Theorem
Let $S$ be a set.
Let $T \subseteq S$.
Suppose that $f: S \to T$ is an injection.

Then there is a bijection $g: S \to T$.


Proof 1
Recursively define a sequence $\langle C_n \rangle$ in the power set of $S$ as follows:

$C_0 = S \setminus T$, the difference between $S$ and $T$.
$C_{n + 1} = f \sqbrk {C_n}$, the image of $C_n$ under $f$.
Let $\ds C := \bigcup_{n \mathop \in \N} C_n$.
Define a mapping $h: S \to T$ as follows:

$\map h x = \begin {cases} \map f x & : x \in C \\ x & : x \notin C \end {cases}$


$h$ is a mapping from $S$ to $T$
By Law of Excluded Middle, for each $x \in S$:

$x \in C$
or:

$x \notin C$
Thus the construction produces a mapping on S.
It remains to be shown that:

$\forall x \in S: \map h x \in T$

Let $x \in C$.
Then:

$\map h x = \map f x \in T$

Let $x \notin C$.
Then by Set is Subset of Union of Family:

$x \notin C_0$
As $x \in S$:

$x \in S \setminus C_0$
by the definition of set difference.
By Relative Complement of Relative Complement:

$S \setminus C_0 = T$
Thus $x \in T$ by the definition of subset.
As $\map h x = x$ in this case:

$\map h x \in T$
$\Box$


$h$ is injective
Let $x, y \in S$.
Suppose that $\map h x = \map h y$.
By Law of Excluded Middle for Two Variables:

$\paren {x \in C} \land \paren {y \in C}$
or:

$\paren {x \notin C} \land \paren {y \notin C}$
or:

$\paren {x \in C} \land \paren {y \notin C}$
or:

$\paren {x \notin C} \paren {y \in C}$

Let $x, y \in C$.
Then $x = y$ because $f$ is injective.

Let $x, y \notin C$.
Then $x = y$ by Identity Mapping is Injection.

Let $x \in C$ and $y \notin C$.
Then $x \in C_n$ for some $n$ by the definition of union.

By Set is Subset of Union of Family:

$\map h x = \map f x \in C_{n + 1} \subseteq C$
Thus $\map h x \in C$.

$\map h y = y$ by the definition of $h$.
Since $y \notin C$, this contradicts the assumption that $\map h x = \map h y$.

The argument for the case of $x \notin C$ and $y \in C$ is identical to the preceding.

Thus $\map h x = \map h y \implies x = y$ for all $x, y \in S$, so $h$ is injective.
$\Box$


$h$ is surjective
Let $y \in T$.
By Law of Excluded Middle:

$y \in C$
or:

$y \notin C$

Let $y \notin C$.
Then:

$\map h y = y$

Let $y \in C$.
Then as $y \notin C_0 = S \setminus T$:

$\exists n \in \N_{>0}: y \in C_{n + 1}$
Thus:

$\exists x \in C_n: y = \map f x$
By the definition of union:

$x \in C$
Thus:

$\map h x = \map f x = y$
Thus:

$\forall y \in T: \exists x \in S: \map h x = y$
Thus by definition, $h$ is surjective.
$\blacksquare$


Proof 2
Define a mapping $E: \powerset S \to \powerset S$ as:

$\map E K = S \setminus \paren {T \setminus f \sqbrk K}$
where $f \sqbrk K$ is the image of $K$ under $f$.
Then:

$\map E K = \paren {S \setminus T} \cup f \sqbrk K$
By Image of Subset under Relation is Subset of Image and the corollary to Set Union Preserves Subsets, $E$ is increasing.

Thus by Knaster-Tarski Lemma: Power Set, $E$ has a fixed point $X$.
Then by definition of fixed point:

$\map E X = X$
That is:

$\paren {S \setminus \paren {T \setminus f \sqbrk X} } = X$
Taking the set difference from $S$:

$T \setminus f \sqbrk X = S \setminus X$
Let $f'$ be the restriction of $f$ to $X \times f \sqbrk X$.
By Injection to Image is Bijection, $f'$ is a bijection.
By Identity Mapping is Bijection, the identity mapping $I_{S \mathop \setminus X}$ from $S \setminus X$ to $T \setminus f \sqbrk X$ is a bijection.
Thus by Union of Bijections with Disjoint Domains and Codomains is Bijection, $g = f' \cup i$ is the bijection we seek.
$\blacksquare$


Proof 3
Define $C = \{f^k(x) | k \in \N, x \in S \setminus T \}$.
Clearly, $C = C_0 \cup C_1$, where:
$C_0 = S \setminus T$, the difference between $S$ and $T$, 
$C_1 = \{f^k(x) | k \in \N_{> 0}, x \in S \setminus T \}$.
Note, that $S \setminus C_0 = S \setminus (S \setminus T) = S \cap T = T$ (use this theorem and $T \subseteq S$).
Obviously, $im(f|C) = C_1$.
Define a mapping $h: S \to S$ as follows:
$\map h x = \begin {cases} \map f x & : x \in C \\ x & : x \notin C \end {cases}$
Clearly, $h = f|C \cup I_{S \setminus C}$, where $I_{S \setminus C}$ is the  identity mapping on the set $S \setminus C$.
Note, that $dom(h) = S$;
$im(h) = im(f|C) \cup im(I_{S \setminus C}) =$
$C_1 \cup (S \setminus C) =$
$C_1 \cup (S \setminus (C_0 \cup C_1)) =$
$S \setminus C_0 =$
$T$.
Also, $h$ is an injection because $h$ is the union of the injections $f|C$ (Restriction of Injection is Injection) and $I_{S \setminus C}$,
and also $dom(f|C) \cap dom(I_{S \setminus C}) = \{\}$
and $im(f|C) \cap im(I_{S \setminus C}) = C_1 \cap (S \setminus C) = \{\}$ because $C_1 \subseteq C$.
Now $h$ is a bijection $S \to T$ because $dom(h) = S, im(h) = T$ and $h$ is an injection.
$\blacksquare$





