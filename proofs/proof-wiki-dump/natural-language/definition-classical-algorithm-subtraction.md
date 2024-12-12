# 

Source: https://proofwiki.org/wiki/Definition:Classical_Algorithm/Subtraction



Definition
Let $u = \sqbrk {u_{n - 1} u_{n - 2} \dotsm u_1 u_0}_b$ and $v = \sqbrk {v_{n - 1} v_{n - 2} \dotsm v_1 v_0}_b$ be $n$-digit integers.
The classical subtraction algorithm forms their $n$-digit difference $u - v$:

$w = \sqbrk {w_n w_{n - 1} \dotsm w_1 w_0}_b$
where $w_n$ is either $0$ or $1$.

The steps are:

$(\text S 1): \quad$ Set $j = 0$, $k = 0$.
$j$ is used to run through all the digit positions
$k$ keeps track of the carry digit between each step.
$(\text S 2): \quad$ Calculate digit $j$:
Calculate $\begin {cases} d = \paren {u_j + v_j - k} \pmod b \\ c = \floor {\dfrac {u_j - v_j + k} b} \end {cases}$ using the primitive subtraction.
Set $w_j$ to $d$.
Set $k$ to $c$.
$(\text S 3): \quad$ Add $1$ to $j$, using conventional integer addition.
If $j < n$, return to $(\text S 2)$.
Otherwise exit.


Proof
Finiteness
For each iteration through the algorithm, step $(\text S 3)$ is executed, which increases $j$ by $1$.
Hence also by step $(\text S 3)$, the algorithm will terminate after $n$ iterations.
$\Box$


Definiteness
Step $(\text S 1)$: Trivially definite.
Step $(\text S 2)$: The primitive subtraction operation is precisely defined.
Step $(\text S 3)$: Trivially definite.
$\Box$


Inputs
The inputs to this algorithm are the $n$-digit integers $u = \sqbrk {u_{n - 1} u_{n - 2} \dotsm u_1 u_0}_b$ and $v = \sqbrk {v_{n - 1} v_{n - 2} \dotsm v_1 v_0}_b$.
$\Box$


Outputs
The output from this algorithm is the $n + 1$-digit integer $w = \sqbrk {w_{n - 1} \dotsm w_1 w_0}_b$.
$\Box$


Effective
Each step of the algorithm is basic enough to be done exactly and in a finite length of time.
$\Box$

Hence by definition of algorithm, the classical subtraction algorithm meets the criteria for it to be an algorithm.
$\blacksquare$


Also see
Classical Subtraction Algorithm is Valid, which demonstrates that $u - v = w$.


Sources
1998: Donald E. Knuth: The Art of Computer Programming: Volume 2: Seminumerical Algorithms (3rd ed.) ... (previous) ... (next): $4.3$: Multiple Precision Arithmetic: $4.3.1$ The Classical Algorithms




