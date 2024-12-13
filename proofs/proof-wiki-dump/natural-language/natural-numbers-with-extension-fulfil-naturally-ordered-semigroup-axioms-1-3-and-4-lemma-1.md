# 

Source: https://proofwiki.org/wiki/Natural_Numbers_with_Extension_fulfil_Naturally_Ordered_Semigroup_Axioms_1,_3_and_4/Lemma_1



Lemma for Natural Numbers with Extension fulfil Naturally Ordered Semigroup Axioms 1, 3 and 4
Construction
Let $\N$ denote the set of natural numbers.
Let $\beta$ be an object such that $\beta \notin \N$
Let $M = \N \cup \set \beta$.
Let us extend the operation of natural number addition from $\N$ to $M$ by defining:














\(\ds 0 + \beta\)

\(=\)







\(\ds \beta + 0 = \beta\)




















\(\ds \beta + \beta\)

\(=\)







\(\ds \beta\)




















\(\ds n + \beta\)

\(=\)







\(\ds \beta + n = n\)










The algebraic structure:

$\struct {M, +}$
is a commutative monoid such that $0$ is the identity.


Proof
Closure
It is directly apparent from the definition that $\struct {M, +}$ is closed.
$\Box$


Commutativity
We know from Natural Number Addition is Commutative that:

$\forall a, b \in \N: a + b = b + a$
It is also seen from the definition that:

$\forall a \in \N: a + \beta = \beta + a$
Thus $+$ is commutative on $M$.
$\Box$


Associativity
We know from Natural Number Addition is Associative that:

$\forall a, b, c \in \N: \paren {a + b} + c = a + \paren {b + c}$
It remains to check the other cases.
In the below, $a$ and $b$ are arbitrary non-zero elements of $\N$.

Because of commutativity it is sufficient to test the various combinations of $a$, $b$ and $0$ with $\beta$.

So:














\(\ds \paren {a + b} + \beta\)

\(=\)







\(\ds a + b\)




















\(\ds a + \paren {b + \beta}\)

\(=\)







\(\ds a + b\)
























\(\ds \paren {a + \beta} + \beta\)

\(=\)







\(\ds a + \beta\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds a + \paren {\beta + \beta}\)

\(=\)







\(\ds a + \beta\)




















\(\ds \)

\(=\)







\(\ds a\)
























\(\ds \paren {a + 0} + \beta\)

\(=\)







\(\ds a + \beta\)




















\(\ds \)

\(=\)







\(\ds a\)




















\(\ds a + \paren {0 + \beta}\)

\(=\)







\(\ds a + \beta\)




















\(\ds \)

\(=\)







\(\ds a\)
























\(\ds \paren {0 + \beta} + \beta\)

\(=\)







\(\ds \beta + \beta\)




















\(\ds \)

\(=\)







\(\ds \beta\)




















\(\ds 0 + \paren {\beta + \beta}\)

\(=\)







\(\ds 0 + \beta\)




















\(\ds \)

\(=\)







\(\ds \beta\)
























\(\ds \paren {\beta + \beta} + \beta\)

\(=\)







\(\ds \beta + \beta\)




















\(\ds \)

\(=\)







\(\ds \beta\)




















\(\ds \beta + \paren {\beta + \beta}\)

\(=\)







\(\ds \beta + \beta\)




















\(\ds \)

\(=\)







\(\ds \beta\)









All combinations of $a$, $b$ and $0$ with $\beta$ have been verified for associativity.
Hence $+$ is associative on $M$.
$\Box$


Identity Element
We have that Identity Element of Natural Number Addition is Zero.
That is:

$\forall a \in \N: a + 0 = a = 0 + a$
We also have that:

$\beta + 0 = \beta = 0 + \beta$
and it is seen that $0$ is the identity element for $\struct {M, +}$.

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.2 \ \text{(a)}$




