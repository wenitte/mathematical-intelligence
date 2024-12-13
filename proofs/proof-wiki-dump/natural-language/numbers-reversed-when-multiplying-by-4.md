# 

Source: https://proofwiki.org/wiki/Numbers_Reversed_when_Multiplying_by_4



Theorem
Numbers of the form $\sqbrk {21 \paren 9 78}_{10}$ are reversed when they are multiplied by $4$:














\(\ds 2178 \times 4\)

\(=\)







\(\ds 8712\)




















\(\ds 21 \, 978 \times 4\)

\(=\)







\(\ds 87 \, 912\)




















\(\ds 219 \, 978 \times 4\)

\(=\)







\(\ds 879 \, 912\)









and so on.


Proof
Let k represent the number of $9$s in the middle of the number.
For $k > 0$ We can rewrite the number as follows:














\(\ds \sqbrk {21 (9) 78}_{10}\)

\(=\)







\(\ds 21 \times 10^{k + 2 } + 900 \sum_{i \mathop = 0}^{k - 1} 10^i + 78\)





Definition of Geometric Series



Taking numbers of this form and multiplying by $4$ produces:














\(\ds 4 \times \paren {21 \times 10^{k + 2 } + 900 \sum_{i \mathop = 0}^{k - 1} 10^i + 78 }\)

\(=\)







\(\ds 84 \times 10^{k + 2 } + 3600 \sum_{i \mathop = 0}^{k - 1} 10^i + 312\)









The first part is composed of $k + 4$ digits. The first two digits will be $84$ followed by $k +2$ digits of $0$














\(\ds 84 \times 10^{k + 2 }\)

\(=\)







\(\ds 84 \times 10^{k + 2 }\)









The sum in the middle is composed of $k + 3$ digits. The first digit will be $3$ followed by $k - 1$ digits of $9$ and then the remaining three digits at the end are $600$














\(\ds 3600 \sum_{i \mathop = 0}^{k - 1} 10^i\)

\(=\)







\(\ds 399 \cdots 99600\)









Summing the three pieces, the final answer will have $k + 4$ digits.
The first digit is $8$ 
followed by $7$ which is the sum of the $4$ from the first part and the $3$ of the middle part
followed by $k$ digits of $9$ where the last $9$ is the sum of the $6$ from the middle part and the $3$ of the last part
and then ending in $12$:














\(\ds \sqbrk {21 (9) 78}_{10} \times 4\)

\(=\)







\(\ds \sqbrk {87 (9) 12}_{10}\)









$\blacksquare$


Also see
Numbers Reversed when Multiplying by 9


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2178$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2178$




