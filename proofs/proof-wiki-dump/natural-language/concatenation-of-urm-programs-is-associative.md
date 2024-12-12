# 

Source: https://proofwiki.org/wiki/Concatenation_of_URM_Programs_is_Associative

Theorem
Let $P, Q, R$ be one-variable URM programs.
Then the concatenated URM programs $P * \paren {Q * R}$ and $\paren {P * Q} * R$ are the same.


Proof
For ease of analysis, let us assume that:

Each of $P$ and $Q$ have already had the appropriate Clear Registers Program $\map Z {2, \map \rho P}$ and $\map Z {2, \map \rho Q}$ appended to them
Each of $P$ and $Q$ have already had the appropriate amendments made to their exit jumps so as to lead to the first line of the appropriate Clear Registers Program. (Note that if the latter is a null URM program, this will be the line immediately following the end of the program).
Thus we can discuss $P$ and $Q$ without reference to these technical details.

When concatenating programs, the only amendments made to the programs themselves are to the contents of the Jump.
So it is clear that the number, type and order of the basic instructions of both programs are the same.
All we have to consider are the amendments to the Jumps.

Suppose the lengths of $P$ and $Q$ are as follows:

$\map \lambda P = t$
$\map \lambda Q = s$
First we look at the Jumps of $R$.
When we form $\paren {Q * R}$, every Jump of $R$ of the form $\map J {m, n, q}$ is replaced by $\map J {m, n, q + s}$.
Then when forming $P * \paren {Q * R}$ the Jump $\map J {m, n, q + s}$ is replaced by $\map J {m, n, q + s + t}$.
On the other hand, when we form $\paren {P * Q} * R$, every Jump of $R$ of the form $\map J {m, n, q}$ is replaced directly by $\map J {m, n, q + \paren {s + t} }$.
Thus the Jumps of $R$ have been replaced by the same instructions in each of $\paren {P * Q} * R$ and $P * \paren {Q * R}$.

Now we look at the Jumps of $Q$.
When forming $\paren {Q * R}$, we have already ensured that every Jump of $Q$ of the form $\map J {m, n, q}$ where $q > s$ has been replaced by $\map J {m, n, s + 1}$.
So when forming $P * \paren {Q * R}$ the Jump $\map J {m, n, s + 1}$ is replaced by $\map J {m, n, s + t + 1}$.
On the other hand, when forming $\paren {P * Q}$, every Jump of $Q$ of the form $\map J {m, n, q}$ is replaced by $\map J {m, n, q + t}$.
We have that $\paren {P * Q}$ has $s + t$ instructions. When $q > s$, we take account of the fact that $q + t > s + t$.
So in $\paren {P * Q} * R$, Jumps of the form $\map J {m, n, s + 1}$ are replaced by $\map J {m, n, s + t + 1}$.
This agrees with the corresponding Jumps in $P * \paren {Q * R}$.

Similarly, we can show that all other Jumps of $Q$, and all Jumps of $P$, are amended in exactly the same way in each of $\paren {P * Q} * R$ and $P * \paren {Q * R}\right)$.

Hence the result.
$\blacksquare$





