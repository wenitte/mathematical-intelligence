# 

Source: https://proofwiki.org/wiki/Clear_Registers_Program

URM Program
Let $a, b \in \N$ be natural numbers such that $0 < a$.
Then we define the URM program $\map Z {a, b}$ to be:




Line


Command


$1$


$\map Z a$


$2$


$\map Z {a + 1}$


$3$


$\map Z {a + 2}$


$\vdots$


$\vdots$


$b - a + 1$


$\map Z b$


where $\map Z a$ denotes the zero instruction:

$r_a \gets 0$

Hence this URM program zeroizes all the registers from $R_a$ through to $R_b$.
If $a > b$ then $\map Z {a, b}$ is the null URM program.

The length of $\map Z {a, b}$ is:

$\map \lambda {\map Z {a, b} } = \begin {cases}
0 & : a > b \\
b - a + 1 & : a \le b
\end {cases}$


Proof
Self-evident.
$\blacksquare$





