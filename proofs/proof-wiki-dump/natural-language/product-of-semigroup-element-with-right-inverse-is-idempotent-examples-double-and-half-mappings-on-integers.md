# 

Source: https://proofwiki.org/wiki/Product_of_Semigroup_Element_with_Right_Inverse_is_Idempotent/Examples/Double_and_Half_Mappings_on_Integers

Examples of Use of Product of Semigroup Element with Right Inverse is Idempotent
Let $\struct {\Z^\Z, \circ}$ be the semigroup defined such that:

$\Z$ is the set of all mappings on the integers.
$\circ$ denotes composition of mappings.

Let $\rho, \sigma \in \Z^\Z$ such that:

$\forall x \in \Z: \map \rho x = \begin{cases} \dfrac x 2 & : x \text { even} \\ 0 & : x \text { odd} \end{cases}$
$\forall x \in \Z: \map \sigma x = 2 x$

Then:

$\rho$ is a right inverse for $\sigma$
but:

$\rho$ is not a left inverse for $\sigma$

As a result:

$\paren {\sigma \circ \rho}^2 = \sigma \circ \rho$


Proof













\(\ds \map {\paren {\rho \circ \sigma} } x\)

\(=\)







\(\ds \map \rho {\map \sigma x}\)




















\(\ds \)

\(=\)







\(\ds \map \rho {2 x}\)





Definition of $\sigma$














\(\ds \)

\(=\)







\(\ds x\)





Definition of $\rho$, as $\map \sigma x$ is even


















\(\ds \map {\paren {\sigma \circ \rho} } x\)

\(=\)







\(\ds \map \sigma {\map \rho x}\)




















\(\ds \)

\(=\)







\(\ds \map \sigma {\begin{cases} \dfrac x 2 & : x \text { even} \\ 0 & : x \text { odd} \end{cases} }\)





Definition of $\rho$














\(\ds \)

\(=\)







\(\ds \begin{cases} x & : x \text { even} \\ 0 & : x \text { odd} \end{cases}\)





Definition of $\sigma$




Thus $\map {\paren {\sigma \circ \rho} } x \ne \map {\paren {\rho \circ \sigma} } x$ if and only if $x$ is odd.

So $\rho$ is a right inverse but not a left inverse for $\sigma$.

Then we have that:

$\map {\paren {\sigma \circ \rho} } x = \begin{cases} x & : x \text { even} \\ 0 & : x \text { odd} \end{cases}$
and it follows that:

$\map {\paren {\sigma \circ \rho}^2} x = \begin{cases} x & : x \text { even} \\ 0 & : x \text { odd} \end{cases}$
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $10$




