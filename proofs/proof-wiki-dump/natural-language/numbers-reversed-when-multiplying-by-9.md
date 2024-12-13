# 

Source: https://proofwiki.org/wiki/Numbers_Reversed_when_Multiplying_by_9



Theorem
Numbers of the form $\sqbrk {10 (9) 89}_{10}$ are reversed when they are multiplied by $9$:














\(\ds 1089 \times 9\)

\(=\)







\(\ds 9801\)




















\(\ds 10 \, 989 \times 9\)

\(=\)







\(\ds 98 \, 901\)




















\(\ds 109 \, 989 \times 9\)

\(=\)







\(\ds 989 \, 901\)









and so on.


Proof
Let k represent the number of $9$s in the middle of the number.
For $k > 0$ We can rewrite the number as follows:














\(\ds \sqbrk {10 (9) 89}_{10}\)

\(=\)







\(\ds 10 \times 10^{k + 2 } + 900 \sum_{i \mathop = 0}^{k - 1} 10^i + 89\)





Definition of Geometric Series



Taking numbers of this form and multiplying by $9$ produces:














\(\ds 9 \times \paren {10 \times 10^{k + 2 } + 900 \sum_{i \mathop = 0}^{k - 1} 10^i + 89 }\)

\(=\)







\(\ds 90 \times 10^{k + 2 } + 8100 \sum_{i \mathop = 0}^{k - 1} 10^i + 801\)









The first part is composed of $k + 4$ digits. The first digit will be $9$ followed by $k + 3$ digits of $0$














\(\ds 90 \times 10^{k + 2 }\)

\(=\)







\(\ds 9 \times 10^{k + 3 }\)









The sum in the middle is composed of $k + 3$ digits. The first digit will be $8$ followed by $k - 1$ digits of $9$ and then the remaining three digits at the end are $100$














\(\ds 8100 \sum_{i \mathop = 0}^{k - 1} 10^i\)

\(=\)







\(\ds 899 \cdots 99100\)









Summing the three pieces, the final answer will have $k + 4$ digits.
The first digit is $9$ 
followed by $8$ which is the first digit of the middle part
followed by $k$ digits of $9$ where the last $9$ is the sum of the $1$ from the middle part and the $8$ of the last part
and then ending in $01$:














\(\ds \sqbrk {10 (9) 89}_{10} \times 9\)

\(=\)







\(\ds \sqbrk {98 (9) 01}_{10}\)









$\blacksquare$


Also see
Numbers Reversed when Multiplying by 4


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1089$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1089$




