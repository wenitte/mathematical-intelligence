# 

Source: https://proofwiki.org/wiki/Definition:Classical_Algorithm/Multiplication



Definition
Let $u = \sqbrk {u_{m - 1} u_{m - 2} \dotsm u_1 u_0}_b$ and $v = \sqbrk {v_{n - 1} v_{n - 2} \dotsm v_1 v_0}_b$ be $m$-digit and $n$-digit integers respectively.
The classical multiplication algorithm forms their $m + n$-digit product $u v$:

$w = \sqbrk {w_{m + n - 1} w_{m + n - 2} \dotsm w_1 w_0}_b$

The steps are:

$(\text M 1): \quad$ Initialise:
Set $w_{m - 1}, w_{m - 2}, \dotsc, w_1, w_0 := 0$
Set $j := 0$
$(\text M 2): \quad$ Is $v_j = 0$?
If so, go to Step $(\text M 6)$.
$(\text M 3): \quad$ Initialise loop:
Set $i := 0$
Set $k := 0$
$(\text M 4): \quad$ Multiply and Add:
Set $t := u_i \times v_j + w_{i + j} + k$
Set $w_{i + j} := t \pmod b$
Set $k := \floor {\dfrac t b}$
$(\text M 5): \quad$ Loop on $i$:
Increase $i$ by $1$.
If $i < m$, go back to Step $(\text M 4)$.
Otherwise, set $w_{j + m} := k$
$(\text M 6): \quad$ Loop on $j$:
Increase $j$ by $1$.
If $j < n$, go back to Step $(\text M 2)$.
Otherwise exit.


Proof
Finiteness
For each iteration through the algorithm, either:

step $(\text M 5)$ is executed, which increases $i$ by $1$.
or

step $(\text M 6)$ is executed, which increases $j$ by $1$.
Hence also by step $(\text M 6)$, the algorithm will terminate after at most $m \times n$ iterations.
$\Box$


Definiteness
Steps $(\text M 1)$, $(\text M 2)$, $(\text M 3)$, $(\text M 5)$, $(\text M 6)$: Trivially definite.
Step $(\text M 4)$: The primitive multiplication and primitive addition operations are precisely defined.
$\Box$


Inputs
The inputs to this algorithm are the $n$-digit and $m$-digit integers $u = \sqbrk {u_{n - 1} u_{n - 2} \dotsm u_1 u_0}_b$ and $v = \sqbrk {v_{m - 1} v_{m - 2} \dotsm v_1 v_0}_b$.
$\Box$


Outputs
The output from this algorithm is the $m + n$-digit integer $w = \sqbrk {w_{m + n - 1} \dotsm w_1 w_0}_b$.
$\Box$


Effective
Each step of the algorithm is basic enough to be done exactly and in a finite length of time.
$\Box$

Hence by definition of algorithm, the classical multiplication algorithm meets the criteria for it to be an algorithm.
$\blacksquare$


Also see
Classical Multiplication Algorithm is Valid, which demonstrates that $u \times v = w$.


Sources
1998: Donald E. Knuth: The Art of Computer Programming: Volume 2: Seminumerical Algorithms (3rd ed.) ... (previous) ... (next): $4.3$: Multiple Precision Arithmetic: $4.3.1$ The Classical Algorithms




