# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Lemma/Proof_1



Theorem
Let $S$ be a set.
Let $T \subseteq S$.
Suppose that $f: S \to T$ is an injection.

Then there is a bijection $g: S \to T$.


Proof
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


Sources
This article incorporates material from proof of Schroeder-Bernstein theorem on PlanetMath, which is licensed under the Creative Commons Attribution/Share-Alike License.





