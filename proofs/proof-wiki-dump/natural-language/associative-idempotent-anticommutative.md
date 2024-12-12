# 

Source: https://proofwiki.org/wiki/Associative_Idempotent_Anticommutative


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
Let $\circ$ be a binary operation on a non-empty set $S$.
Let $\circ$ be associative.

Then $\circ$ is anticommutative if and only if:

$(1): \quad \circ$ is idempotent
and:

$(2): \quad \forall a, b \in S: a \circ b \circ a = a$


Proof
Let $\circ$ be an associative operation on $S$.


Necessary Condition
Suppose $\circ$ is anticommutative.
Since $S$ is non-empty, let $a\in S$ be arbitrary.

By definition, $\circ$ is anticommutative implies that:

$\forall a \in S: a \circ a = a \circ a \iff a = a$
By $\circ$ is a well-defined operation, $a \circ a$ is well-defined. 

It remains to be shown that $a \circ a \in S$.

Let $a, w\in S$ be arbitrary. Since $\circ$ is anticommutative, then:
$\paren {a \circ a} \circ w = w \circ \paren {a \circ a} \iff a \circ a = w$
Thus $a \circ a \in S$.
That is:

$\forall \paren {a \circ a}, w \in S: \paren {a \circ a} \circ w = w \circ \paren {a \circ a} \iff a \circ a = w$

Let $w = a \in S$. Then:

$\forall \paren {a \circ a}, a \in S: \paren {a \circ a} \circ a = a \circ \paren {a \circ a} \iff a \circ a = a$
Hence:

$\forall a \in S: \paren {a \circ a} \circ a = a \circ \paren {a \circ a} \iff a \circ a = a$
So $\circ$ being associative and anticommutative implies that $\circ$ is idempotent.

Now, it remains to be shown that for any $a, b \in S$, if $\circ$ is associative and anticommutative, then $ a \circ b \circ a = a$.
In particular, it remains to be shown that $a \circ b \circ a \in S$.
By assumption:

$\forall a, b \in S: a \circ b = b \circ a \iff a = b$
By $\circ$ is a well-defined operation, $a \circ b$ and $b \circ a$ are well-defined.

Let $a, b, x \in S$, then:
$\paren {a \circ b} \circ x = x \circ \paren {a \circ b} \iff a \circ b = x$

This implies that:

$\forall \paren {a \circ b}, x \in S: \paren {a \circ b} \circ x = x \circ \paren {a \circ b} \iff a \circ b = x$

Hence there exists $\paren {a \circ b } \in S$ for some $a, b \in S$. 

Similarly, let $b, a, y \in S$, then:
$\paren {b \circ a} \circ y = y \circ \paren {b \circ a} \iff b \circ a = y$

This implies that:

$\forall \paren {b \circ a}, y \in S: \paren {b \circ a} \circ y = y \circ \paren {b \circ a} \iff b \circ a = y$

Hence there exists $\paren {b \circ a} \in S$ for some $a, b \in S$. 

Let $a, b, z \in S$, then:
$\paren {a \circ b \circ a} \circ z = z \circ \paren {a \circ b \circ a} \iff a \circ b \circ a = z$

Hence there exists $\paren {a \circ b \circ a} \in S$ for some $a, b \in S$.
Hence:














\(\ds \paren {a \circ a} \circ b \circ a\)

\(=\)







\(\ds a \circ b \circ a\)





$\circ$ is idempotent, proved above














\(\ds \)

\(=\)







\(\ds a \circ b \circ \paren {a \circ a}\)





$\circ$ is idempotent








\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {a \circ b \circ a}\)

\(=\)







\(\ds \paren {a \circ b \circ a} \circ a\)





$\circ$ is associative








\(\ds \leadsto \ \ \)





\(\ds a \circ b \circ a\)

\(=\)







\(\ds a\)





$\circ$ is anticommutative








\(\ds \leadsto \ \ \)





\(\ds a \circ b \circ a\)

\(=\)







\(\ds a\)





by hypothesis




So $\circ$ being associative and anticommutative implies, via the fact (also proved) that $\circ$ is idempotent, that $a \circ b \circ a = a$.
$\Box$


Sufficient Condition
Now, suppose $\circ$ (which we take to be associative) is idempotent and:

$\forall a, b \in S: a \circ b \circ a = a$
It remains to be shown that $\circ$ is anticommutative.

Suppose $a \circ b = b \circ a$.
Then:








\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {b \circ a}\)

\(=\)







\(\ds a \circ \paren {a \circ b}\)





by hypothesis: $a \circ b \circ a = a\in S$














\(\ds a \circ b \circ a\)

\(=\)







\(\ds \paren {a \circ a} \circ b\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds a \circ b\)





$\circ$ is idempotent














\(\ds \)

\(=\)







\(\ds a\)





by hypothesis




Similarly:














\(\ds a \circ b\)

\(=\)







\(\ds b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ b} \circ a\)

\(=\)







\(\ds \paren {b \circ a} \circ a\)





by hypothesis: $a \circ b \circ a \in S$














\(\ds a \circ b \circ a\)

\(=\)







\(\ds b \circ \paren {a \circ a}\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds b \circ a\)





$\circ$ is idempotent














\(\ds \)

\(=\)







\(\ds a\)





by hypothesis




Also:














\(\ds a \circ b\)

\(=\)







\(\ds b \circ a\)














\(\ds \leadsto \ \ \)





\(\ds b \circ \paren {a \circ b}\)

\(=\)







\(\ds b \circ \paren {b \circ a}\)





by hypothesis: $b \circ a \circ b  = b \in S$














\(\ds b \circ a \circ b\)

\(=\)







\(\ds \paren {b \circ b} \circ a\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds b \circ a\)





$\circ$ is idempotent














\(\ds \)

\(=\)







\(\ds b\)





by hypothesis




Then:














\(\ds b \circ a\)

\(=\)







\(\ds a \circ b\)














\(\ds \leadsto \ \ \)





\(\ds \paren {b \circ a} \circ b\)

\(=\)







\(\ds \paren {a \circ b} \circ b\)





by hypothesis: $b \circ a \circ b = b \in S$








\(\ds \leadsto \ \ \)





\(\ds b \circ a \circ b\)

\(=\)







\(\ds a \circ \paren {b \circ b}\)





$\circ$ is associative














\(\ds \)

\(=\)







\(\ds a \circ b\)





$\circ$ is idempotent














\(\ds \)

\(=\)







\(\ds b\)





by hypothesis




Hence:














\(\ds a\)

\(=\)







\(\ds a \circ b = b\)




















\(\ds a\)

\(=\)







\(\ds b \circ a = b\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds b\)










So:

$(1): \quad \circ$ is idempotent
and:

$(2): \quad \forall a, b \in S: a \circ b \circ a = a$
together imply that $\circ$ is anticommutative.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.17 \ \text{(b)}$




