# 

Source: https://proofwiki.org/wiki/Distributional_Derivative_on_Distributions_is_Continuous_Operator

Theorem
The distributional derivative on distributions is a continuous operator.


Proof
Let $\mathbf 0$ be the zero mapping.
Let $\sequence {\phi_n}_{n \mathop \in \N} \in \map \DD \R$ be a sequence of test functions.
Let $\sequence {\phi_n}_{n \mathop \in \N}$ converge to $\mathbf 0$ in the test function space:

$\phi_n \stackrel \DD {\longrightarrow} \mathbf 0$
By definition, a test function is a smooth real function with a compact support $K$.
By differentiating a test function we get another smooth real function with a compact support not larger than $K$.
Thus, $\phi_n'$ is also a test function.
Since $\phi_n \stackrel \DD {\longrightarrow} \mathbf 0$, we have that for every multiindex $k$ the sequence $\sequence {D^k \phi_n}_{n \mathop \in \N}$ converges uniformly to $\mathbf 0$.
Obviously, all the sequences of $\sequence {D^k \phi_n}_{n \mathop \in \N}$ with $k \ge 1$ converge uniformly to $\mathbf 0$.
By definition, $\sequence {\phi_n'}_{n \mathop \in \N}$ converges to $\mathbf 0$ in the test function space:

$\phi_n' \stackrel \DD {\longrightarrow} \mathbf 0$
Let $T \in \map {\DD'} \R$ be a distribution.
Then:

$\paren {\phi_n' \stackrel \DD {\longrightarrow} \mathbf 0} \implies \paren {\map T {\phi_n'} \to \map T {\mathbf 0} = 0}$
By definition of the distributional derivative:

$\map T {\phi_n'} = - \map {T'} {\phi_n}$
Therefore:

$\paren {\phi_n' \stackrel \DD {\longrightarrow} \mathbf 0} \implies \paren {\map {T'} {\phi_n} \to 0}$
By definition, the distributional derivative on distributions is a continuous operator.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




