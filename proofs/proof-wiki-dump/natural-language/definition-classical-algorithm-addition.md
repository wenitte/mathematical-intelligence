# 

Source: https://proofwiki.org/wiki/Definition:Classical_Algorithm/Addition



Definition
Let $u = \sqbrk {u_{n - 1} u_{n - 2} \dotsm u_1 u_0}_b$ and $v = \sqbrk {v_{n - 1} v_{n - 2} \dotsm v_1 v_0}_b$ be $n$-digit integers.
The classical addition algorithm forms their $n + 1$-digit sum $u + v$:

$w = \sqbrk {w_n w_{n - 1} \dotsm w_1 w_0}_b$
where $w_n$ is either $0$ or $1$.

The steps are:

$(\text A 1): \quad$ Set $j = 0$, $k = 0$.
$j$ is used to run through all the digit positions
$k$ keeps track of the carry digit between each step.
$(\text A 2): \quad$ Calculate digit $j$:
Calculate $\begin {cases} s = \paren {u_j + v_j + k} \pmod b \\ c = \floor {\dfrac {u_j + v_j + k} b} \end {cases}$ using the primitive addition.
Set $w_j$ to $s$.
Set $k$ to $c$.
$(\text A 3): \quad$ Add $1$ to $j$, using conventional integer addition.
If $j < n$, return to $(\text A 2)$.
Otherwise, set $w_n$ equal to $k$ and exit.


Proof
Finiteness
For each iteration through the algorithm, step $(\text A 3)$ is executed, which increases $j$ by $1$.
Hence also by step $(\text A 3)$, the algorithm will terminate after $n$ iterations.
$\Box$


Definiteness
Step $(\text A 1)$: Trivially definite.
Step $(\text A 2)$: The primitive addition operation is precisely defined.
Step $(\text A 3)$: Trivially definite.
$\Box$


Inputs
The inputs to this algorithm are the $n$-digit integers $u = \sqbrk {u_{n - 1} u_{n - 2} \dotsm u_1 u_0}_b$ and $v = \sqbrk {v_{n - 1} v_{n - 2} \dotsm v_1 v_0}_b$.
$\Box$


Outputs
The output from this algorithm is the $n + 1$-digit integer $w = \sqbrk {w_n w_{n - 1} \dotsm w_1 w_0}_b$.
$\Box$


Effective
Each step of the algorithm is basic enough to be done exactly and in a finite length of time.
$\Box$

Hence by definition of algorithm, the classical addition algorithm meets the criteria for it to be an algorithm.
$\blacksquare$


Also see
Classical Addition Algorithm is Valid, which demonstrates that $u + v = w$.


Sources
1998: Donald E. Knuth: The Art of Computer Programming: Volume 2: Seminumerical Algorithms (3rd ed.) ... (previous) ... (next): $4.3$: Multiple Precision Arithmetic: $4.3.1$ The Classical Algorithms




