# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_Anticommutative/Corollary

Corollary to Cartesian Product is Anticommutative
Let $S$ and $T$ be sets.

Then:

$S \times T = T \times S \iff S = T \lor S = \O \lor T = \O$
where $S \times T$ denotes the cartesian product of $S$ and $T$.


Proof
Suppose $S \times T = T \times S$.
Then either:

$(1): \quad S \ne \O \land T \ne \O$ and from Cartesian Product is Anticommutative, $S = T$
or:

$(2): \quad S = \O \lor T = \O$ and from Cartesian Product is Empty iff Factor is Empty, $S \times T = T \times S = \O$.
In either case, we see that:

$S \times T = T \times S \implies S = T \lor S = \O \lor T = \O$

Now suppose $S = T \lor S = \O \lor T = \O$.
From Cartesian Product is Empty iff Factor is Empty, we have that:

$S = \O \lor T = \O \implies S \times T = \O = T \times S$
Similarly:

$S = T \land \neg \paren {S = \O \lor T = \O} \implies S \times T = T \times S$
by definition of equality. 
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 3$. Ordered pairs; cartesian product sets: Exercise $5$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.3$: Mappings: Exercise $11$




