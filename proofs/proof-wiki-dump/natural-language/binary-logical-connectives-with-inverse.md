# 

Source: https://proofwiki.org/wiki/Binary_Logical_Connectives_with_Inverse



Theorem
Let $\circ$ be a binary logical connective.
Then there exists another binary logical connective $*$ such that:

$\forall p, q \in \set {\F, \T}: \paren {p \circ q} * q \dashv \vdash p \dashv \vdash q * \paren {p \circ q}$
if and only if $\circ$ is either:

$(1): \quad$ the exclusive or operator
or:

$(2): \quad$ the biconditional operator.

That is, the only truth functions that have an inverse operation are the exclusive or and the biconditional.


Proof
Necessary Condition
Let $\circ$ be a binary logical connective such that there exists $*$ such that:

$\paren {p \circ q} * q \dashv \vdash p$
That is, by definition (and minor abuse of notation):

$\forall p, q \in \set {\F, \T}: \paren {p \circ q} * q = p$

For reference purposes, let us list from Binary Truth Functions the complete truth table containing all of the binary logical connectives:
$\begin{array}{|r|cccc|} \hline
p                                & \T & \T & \F & \F \\
q                                & \T & \F & \T & \F \\
\hline
\map {f_\T} {p, q}               & \T & \T & \T & \T \\
p \lor q                         & \T & \T & \T & \F \\
p \impliedby q                   & \T & \T & \F & \T \\
\map {\pr_1} {p, q}              & \T & \T & \F & \F \\
p \implies q                     & \T & \F & \T & \T \\
\map {\pr_2} {p, q}              & \T & \F & \T & \F \\
p \iff q                         & \T & \F & \F & \T \\
p \land q                        & \T & \F & \F & \F \\
p \uparrow q                     & \F & \T & \T & \T \\
\map \neg {p \iff q}             & \F & \T & \T & \F \\
\map {\overline {\pr_2} } {p, q} & \F & \T & \F & \T \\
\map \neg {p \implies q}         & \F & \T & \F & \F \\
\map {\overline {\pr_1} } {p, q} & \F & \F & \T & \T \\
\map \neg {p \impliedby q}       & \F & \F & \T & \F \\
p \downarrow q                   & \F & \F & \F & \T \\
\map {f_\F} {p, q}               & \F & \F & \F & \F \\
\hline
\end{array}$

Suppose that for some $q \in \set {\F, \T}$:

$\paren {p \circ q}_{p = \F} = \paren {p \circ q}_{p = \T}$
Then:

$\paren {\paren {p \circ q} * q}_{p = \F} = \paren {\paren {p \circ q} * q}_{p = \T}$
and so either:

$\paren {\paren {p \circ q} * q}_{p = \F} \ne p$
or:

$\paren {\paren {p \circ q} * q}_{p = \T} \ne p$
Thus for $\circ$ to have an inverse operation it is necessary for $\F \circ q \ne \T \circ q$.

This eliminates:














\(\ds \)

\(\)







\(\ds \map {f_\T} {p, q}\)





as $p \circ q = \T$ for all values of $p$ and $q$














\(\ds \)

\(\)







\(\ds p \lor q\)





as $p \circ q = \T$ for $q = \T$














\(\ds \)

\(\)







\(\ds p \impliedby q\)





as $p \circ q = \T$ for $q = \F$














\(\ds \)

\(\)







\(\ds p \implies q\)





as $p \circ q = \T$ for $q = \T$














\(\ds \)

\(\)







\(\ds \map {\pr_2} {p, q}\)





as $p \circ q = \T$ for $q = \T$ and also $p \circ q = \F$ for $q = \F$














\(\ds \)

\(\)







\(\ds p \land q\)





as $p \circ q = \F$ for $q = \F$














\(\ds \)

\(\)







\(\ds p \uparrow q\)





as $p \circ q = \T$ for $q = \F$














\(\ds \)

\(\)







\(\ds \map {\overline {\pr_2} } {p, q}\)





as $p \circ q = \T$ for $q = \F$ and also $p \circ q = \F$ for $q = \T$














\(\ds \)

\(\)







\(\ds \map \neg {p \implies q}\)





as $p \circ q = \F$ for $q = \T$














\(\ds \)

\(\)







\(\ds \map \neg {p \impliedby q}\)





as $p \circ q = \F$ for $q = \F$














\(\ds \)

\(\)







\(\ds p \downarrow q\)





as $p \circ q = \F$ for $q = \T$














\(\ds \)

\(\)







\(\ds \map {f_\F} {p, q}\)





as $p \circ q = \T$ for all values of $p$ and $q$




The remaining connectives which may have inverses are:
$\begin{array}{|r|cccc|} \hline
p                                & \T & \T & \F & \F \\
q                                & \T & \F & \T & \F \\
\hline
\map {\pr_1} {p, q}              & \T & \T & \F & \F \\
p \iff q                         & \T & \F & \F & \T \\
\map \neg {p \iff q}             & \F & \T & \T & \F \\
\map {\overline {\pr_1} } {p, q} & \F & \F & \T & \T \\
\hline
\end{array}$

Suppose that for some $p \in \set {\F, \T}$:

$\paren {p \circ q}_{q = \F} = \paren {p \circ q}_{q = \T}$

Then:

$\paren {q * \paren {p \circ q} }_{q = \F} = \paren {q * \paren {p \circ q} }_{q = \T}$
and so either:

$\paren {q * \paren {p \circ q} }_{q = \F} \ne p$
or:

$\paren {q * \paren {p \circ q} }_{q = \T} \ne p$

This eliminates:














\(\ds \)

\(\)







\(\ds \map {\pr_1} {p, q}\)





as $p \circ q = \T$ for $p = \T$ and also $p \circ q = \F$ for $p = \F$














\(\ds \)

\(\)







\(\ds \map {\overline {\pr_1} } {p, q}\)





as $p \circ q = \T$ for $p = \F$ and also $p \circ q = \F$ for $p = \T$



We are left with exclusive or and the biconditional.
The result follows from Exclusive Or is Self-Inverse and Biconditional is Self-Inverse.
$\blacksquare$


Sufficient Condition
Let $\circ$ be the exclusive or operator.
Then by Exclusive Or is Self-Inverse it follows that:

$\paren {p \circ q} \circ q \dashv \vdash p$
Thus $*$ is the inverse operation of the exclusive or operation.

Similarly, let $\circ$ be the biconditional operator.
Then by Biconditional is Self-Inverse it follows that:

$\paren {p \circ q} \circ q \dashv \vdash p$
$\blacksquare$





