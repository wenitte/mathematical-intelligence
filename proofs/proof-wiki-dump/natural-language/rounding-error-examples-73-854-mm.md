# 

Source: https://proofwiki.org/wiki/Rounding_Error/Examples/73.854_mm

Example of Rounding Error
Let $x$ be a length expressed as $73.854 \, \mathrm {mm}$ to $5$ significant figures.
The maximum rounding error in $x$ is $0.0005 \, \mathrm {mm}$.


Proof
By definition of rounding, we have:

$73.8535 \le x \le 73.8545$
Whether the inequalities are strict or not depends on the treatment of the half.

Rounding up, we have:

$73.8535 \le x < 73.8545$
because $73.8545$ will round up to $73.855$.

Rounding down, we have:

$73.8535 < x \le 73.8545$
because $73.8535$ will round down to $73.853$.

Rounding to even, we have:

$73.8535 \le x \le 73.8545$
because both $73.8535$ and $73.8545$ will round to even to $73.854$.

Hence we have:

$\size {73.854 - 73.8535} \le 0.0005 \ge \size {73.854 - 73.8545}$
$\blacksquare$


Sources
1972: Murray R. Spiegel and R.W. Boxer: Theory and Problems of Statistics (SI ed.) ... (previous) ... (next): Chapter $1$: Variables and Graphs: Solved Problems: Scientific Notation and Significant Figures: $1.7 \ \text {(a)}$




