# 

Source: https://proofwiki.org/wiki/Normalized_URM_Program

Theorem
Let $P$ be a URM program.
Let $l = \map \lambda P$ be the number of basic instructions in $P$.
Let $u = \map \rho P$ be the number of registers used by $P$.

Then $P$ can be modified as follows:

Every Jump of the form $\map J {m, n, q}$ where $q > l$ may be replaced by $\map J {m, n, l + 1}$
If $u > 0$, a Clear Registers Program $\map Z {2, u}$ can be appended to the end of $P$ at lines $l + 1$ to $l + u - 1$.
The new program $P'$ that results from the above modifications produces exactly the same output as $P$ for each input.
Note now though that $\map \lambda {P'} = l + u - 1$.

Such a program as $P'$ is called a normalized URM program.

The point of doing this is so as to make programs easier to concatenate. Once the above have been done, each program has a well-defined exit line which can be used as the start line of the program that immediately follows it.


Proof
Each Jump of the form $\map J {m, n, q}$ where $q > l$ leads to a line which does not contain an instruction.
The line $\map J {m, n, l + 1}$ likewise contains no instructions, by definition.
Therefore, when jumping to $\map J {m, n, l + 1}$ the program behaves in exactly the same way: that is, it stops when the instruction $\map J {m, n, l + 1}$ causes the program to jump to line $l + 1$.

After the URM program has terminated, its output sits in $R_1$ by convention.
Once the URM program reaches line $l + 1$ it has by definition terminated, and because of the modifications to the Jumps as defined above, there is no other way that it can terminate.
Any further instructions that are added to a URM program that are placed at line $l + 1$ and those following will therefore be executed in order (as long as none of them are Jumps) and the program will then really terminate.
By adding the Clear Registers Program $\map Z {2, u}$ to the end of $P$, the only effect this will have on the operation of the program is to clear all the registers to $0$ except the one the output is in.
$\blacksquare$





