# 

Source: https://proofwiki.org/wiki/Mean_Ergodic_Theorem

Theorem
Let $\struct {X, \BB, \mu, T}$ be a measure-preserving dynamical system.
Let $\map {L^2_\C} \mu$ be the complex-valued $L^2$ space of $\mu$.
Let $U_T : \map {L^2_\C} \mu \to \map {L^2_\C} \mu$ of $T$ be the Koopman operator.
Let $I := \set {f \in \map {L^2_\C} \mu : \map {U_T} f = f}$.

Then for each $f \in \map {L^2_\C} \mu$:

$\ds \lim_{N \mathop \to \infty} \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} \map {U_T^n} f = \map {P_T} f$ converges in the $L^2$-norm
where:

$U_T^n$ denotes the $n$ times composition of $U_T$
$P_T: \map {L^2_\C} \mu \to \map {L^2_\C} \mu$ denotes the orthogonal projection on the closed linear subspace $I$.


Proof
Recall $L^2$ space forms Hilbert space.
That is, $\map {L^2_\C} \mu$ is a Hilbert space with the $L^2$ inner product:

$\ds \innerprod f g := \int f \; \overline g \rd \mu$

Let $\norm \cdot$ be the norm of $\map {L^2_\C} \mu$.
By Koopman Operator is Isometry:

$\forall f \in \map {L^2_\C} \mu : \norm {\map U f} = \norm f$
Therefore, the result follows from Mean Ergodic Theorem (Hilbert Space).
$\blacksquare$


Sources
2011: Manfred Einsiedler and Thomas Ward: Ergodic Theory: with a view towards Number Theory $2.5$ The Mean Ergodic Theorem




