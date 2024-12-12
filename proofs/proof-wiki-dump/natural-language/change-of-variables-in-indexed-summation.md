# 

Source: https://proofwiki.org/wiki/Change_of_Variables_in_Indexed_Summation



Theorem
Let $\mathbb A$ be one of the standard number systems $\N, \Z, \Q, \R, \C$.
Let $a, b, c, d$ be integers.
Let $\closedint a b$ denote the integer interval between $a$ and $b$.
Let $f: \closedint a b \to \mathbb A$ be a mapping.
Let $g: \closedint c d \to \closedint a b$ be a bijection.

Then we have an equality of indexed summations:

$\ds \sum_{i \mathop = a}^b \map f i = \sum_{i \mathop = c}^d \map f {\map g i}$


Outline of Proof
We use Indexed Summation over Translated Interval to translate $\closedint c d$ to $\closedint a b$.
This reduces the problem to Indexed Summation does not Change under Permutation.


Proof
Because $g : \closedint c d \to \closedint a b$ is a bijection, these sets are equivalent.
By Cardinality of Integer Interval, $\closedint a b$ has cardinality $b - a + 1$.
Thus:

$b - a + 1 = d - c + 1$
Thus

$c - a = d - b$
By Indexed Summation over Translated Interval:

$\ds \sum_{i \mathop = c}^d \map f {\map g i} = \sum_{i \mathop = a}^b \map f {\map g {i + c - a} }$
By Translation of Integer Interval is Bijection, the mapping $T : \closedint a b \to \closedint c d$ defined as:

$\map T k = k + c - a$
is a bijection.
By Composite of Bijections is Bijection, $g \circ T$ is a permutation of $\closedint a b$.
We have:














\(\ds \sum_{i \mathop = c}^d \map f {\map g i}\)

\(=\)







\(\ds \sum_{i \mathop = a}^b \map f {\map g {i + c - a} }\)





Indexed Summation over Translated Interval














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^b \map f {\map g {\map T i} }\)





Definition of $T$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = a}^b \map f i\)





Indexed Summation does not Change under Permutation



$\blacksquare$


Also see
Change of Variables in Summation over Finite Set




