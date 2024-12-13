# 

Source: https://proofwiki.org/wiki/Number_Base_Conversion



Algorithm
The purpose of this algorithm is to convert a natural number from one base to another.

Let $x_0$ be the natural number in question.
Let $b$ be the number base into which it is to be converted, where $b \ge 2$.

Step 0: Set $n := 0$.
Step 1: From the Division Theorem, let $x_n = b x_{n+1} + r_n$ where $0 \le r_n < b$.
Step 2: Set $n := n + 1$.
Step 3: If $x_n < b$ go to step 4. Otherwise go to step 1.
Step 4: Set $r_n = x_n$. The required output is $[r_n r_{n-1} \ldots r_1 r_0]_b$ where the notation is that used in the definition of number base.


Analysis
Finiteness
Each cycle through the algorithm, step 1 is passed.  In this step, $x_{n+1} \le \dfrac {x_n} b$ and so strictly decreases.
As $x_0$ is finite, the process is guaranteed to terminate in a finite number of steps.


Definiteness
Follows from the Division Theorem.


Inputs
The input is the natural number to be converted.


Outputs
The output is the base $b$ representation of the input.


Effectiveness
Follows from the Division Theorem.

Hence this process meets the criteria for being an algorithm, as required.
$\blacksquare$





