# 

Source: https://proofwiki.org/wiki/Images_of_Elements_under_Repeated_Composition_of_Injection_form_Equivalence_Classes



Theorem
Let $S$ be a set.
Let $f: S \to S$ be an injection.
Let the sequence of mappings:

$f^0, f^1, f^2, \ldots, f^n, \ldots$
be defined as:

$\forall n \in \N: \map {f^n} x = \begin {cases}
x & : n = 0 \\
\map f x & : n = 1 \\
\map f {\map {f^{n - 1} } x} & : n > 1
\end {cases}$
Let $\RR \subseteq S \times S$ be the relation on $S$ defined as:

$\RR = \set {\tuple {a, b} \in S \times S: \exists k \in \Z: b = \map {f^k} a \lor \exists j \in \Z: a = \map {f^j} b}$
Then $\RR$ is an equivalence relation.


Proof
Checking in turn each of the criteria for equivalence:


Reflexivity
By definition, $f^0$ is the identity mapping.
So by definition of $f^0$:

$\forall a \in S: a = \map {f^0} a$
That is:

$a \mathrel \RR a$
So $\RR$ has been shown to be reflexive.
$\Box$


Symmetry
Let $a \mathrel \RR b$.
That is:

$b = \map {f^k} a$
for some $k \in \Z$.
Let $g_k$ be the restriction of $f^k$ to its image.
From Injection to Image is Bijection, $g^k$ is a bijection.
From Inverse of Bijection is Bijection:

$\map {\paren {g^k}^{-1} } b = a$
Consider the extension $\paren {f^k}^{-1}$ of $\paren {g^k}^{-1}$ to its codomain which is $S$.
From Inverse of Injection is Many-to-One Relation, $\map {\paren {f^k}^{-1} } b = a$ is well-defined.
By interpreting $\map {\paren {f^k}^{-1} } b = a$ as $\map {f^{-k} } b = a$, it follows that we can set $j = -k$ and so:

$\exists j \in \Z: \map {f^j} b = a$
That is:

$b \mathrel \RR a$
So $\RR$ has been shown to be symmetric.
$\Box$


Transitivity
Let $a \mathrel \RR b$ and $b \mathrel \RR c$.
That is:

$b = \map {f^{k_1} } a$
$c = \map {f^{k_2} } b$
where $k_1, k_2 \in \Z$.
That is:

$c = \map {f^{k_2} } {\map {f^{k_1} } a}$
By Composition of Repeated Compositions of Injections:

$c = \map {f^{k_2} } {\map {f^{k_1} } a} = \map {f^{k_1 + k_2} } a$
and so:

$a \mathrel \RR c$
So $\RR$ has been shown to be transitive.
$\Box$

$\RR$ has been shown to be reflexive, symmetric and transitive.
Hence by definition it is an equivalence relation.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $3$




