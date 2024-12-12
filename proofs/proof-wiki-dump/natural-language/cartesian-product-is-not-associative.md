# 

Source: https://proofwiki.org/wiki/Cartesian_Product_is_not_Associative



Theorem
Let $A, B, C$ be non-empty sets.
Then:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
where $A \times B$ is the cartesian product of $A$ and $B$.


Intuitive Proof
By definition:

$A \times B = \set {\tuple {a, b}: a \in A, b \in B}$
that is, the set of all ordered pairs $\tuple {a, b}$ such that $a \in A$ and $b \in B$.
Now:

Elements of $A \times \paren {B \times C}$ are in the form $\tuple {a, \tuple {b, c} }$
Elements of $\paren {A \times B} \times C$ are in the form $\tuple {\tuple {a, b}, c}$.
So for $A \times \paren {B \times C} = \paren {A \times B} \times C$ we would need to have that $a = \tuple {a, b}$ and $\tuple {b, c} = c$.
This can not possibly be so, except perhaps in the most degenerate cases.

So from the strict perspective of the interpretation of the pure definitions:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
$\blacksquare$


Formal Proof
Assign to every set $X$ the following number $\map n X \in \N$:

$\map n X = \begin {cases} 0 & : X = \O \\ 1 + \max_{Y \mathop \in X} \map n Y & : \text{ otherwise} \end {cases}$
From the Axiom of Foundation:

$\forall X \in \N: \map n X < \infty$

Now let $a \in A$ be such that:

$\map n a = \min_{b \mathop \in A} \map n b$
Suppose that:

$\exists a' \in A, b \in B: a = \tuple {a', b}$
That is, that $a$ equals the ordered pair of $a'$ and $b'$. 
Then it follows that:














\(\ds \map n a\)

\(=\)







\(\ds \map n {\set {\set {a'}, \set {a', b} } }\)





Definition of Ordered Pair














\(\ds \)

\(=\)







\(\ds 1 + \map \max {\map n {\set {a'} }, \map n {\set {a', b} } }\)





Definition of $n$














\(\ds \map n {\set {a', b} }\)

\(\ge\)







\(\ds \map n {\set {a'} }\)





Maximum of Subset














\(\ds \)

\(=\)







\(\ds 1 + \map n {a'}\)





Definition of $n$








\(\ds \leadsto \ \ \)





\(\ds \map n a\)

\(\ge\)







\(\ds 2 + \map n {a'}\)









That is:

$\map n {a'} < \map n a$
contradicting the assumed minimality of the latter. 
Therefore:

$a \notin A \times B$
and hence:

$A \nsubseteq A \times B$
It follows from Equality of Cartesian Products that:

$A \times \paren {B \times C} \ne \paren {A \times B} \times C$
$\blacksquare$


Comment
Despite this result, the cartesian product of three sets is usually just written $A \times B \times C$ and understood to be the set of all ordered triples.
That is, as the set of all elements like $\tuple {a, b, c}$.

From Cardinality of Cartesian Product of Finite Sets, we have that:

$\card {A \times \paren {B \times C} } = \card {\paren {A \times B} \times C}$
and so:

$A \times \paren {B \times C} \sim \paren {A \times B} \times C$
where $\sim$ denotes set equivalence.

So it matters little whether $A \times B \times C$ is defined as being $A \times \paren {B \times C}$ or $\paren {A \times B} \times C$, and it is rare that one would even need to know.
When absolute rigour is required, the cartesian product of more than two sets can be defined using ordered $n$-tuples or, even more generally, by indexed sets.


Also see
Bijection between R x (S x T) and (R x S) x T
Equality of Cartesian Products


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.2: \ 13$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $8$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 9 \beta$




