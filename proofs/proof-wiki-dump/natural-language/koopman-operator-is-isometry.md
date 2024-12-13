# 

Source: https://proofwiki.org/wiki/Koopman_Operator_is_Isometry

Theorem
Let $\struct {X, \BB, \mu, T}$ be a measure-preserving dynamical system.
Let $\map {L^2_\C} \mu$ be the complex-valued $L^2$ space of $\mu$.
Let $U_T : \map {L^2_\C} \mu \to \map {L^2_\C} \mu$ of $T$ be the Koopman operator.
Let $\innerprod \cdot \cdot$ denote the inner product on $\map {L^2_\C} \mu$, i.e.

$\ds \forall f, g \in \map {L^2_\C} \mu : \innerprod f g := \int \overline f g \rd \mu$
where $\overline f$ denotes the complex conjugate of $f$.

Then $U_T$ is isometry on the $L^2$ Hilbert space $\struct {\map {L^2_\C} \mu, \innerprod \cdot \cdot}$.
That is:

$\ds \forall f, g \in \map {L^2_\C} \mu : \innerprod {U_T f} {U_T g} = \innerprod f g$


Proof
Let $f, g \in \map {L^2_\C} \mu $.
Then:














\(\ds \innerprod {U_T f} {U_T g}\)

\(=\)







\(\ds \int  {\overline {U_T f} } \; {U_T g} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int {\overline {f \circ T} } \; {g \circ T} \rd \mu\)





Definition of Koopman operator














\(\ds \)

\(=\)







\(\ds \int {\overline f} \circ T \; {g \circ T} \rd \mu\)





as $\map {\overline {f \circ T} } x = \overline {\map f {T x} } = \map {\overline f} {T x} = \map { {\overline f} \circ T} x$














\(\ds \)

\(=\)







\(\ds \int \paren { {\overline f} g} \circ T \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int {\overline f} g \rd \mu\)





Definition of Measure-Preserving Transformation














\(\ds \)

\(=\)







\(\ds \innerprod f g\)









$\blacksquare$





