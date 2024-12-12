# 

Source: https://proofwiki.org/wiki/General_Distributivity_Theorem/Warning

Warning about use of of General Distributivity Theorem
When using the General Distributivity Theorem, be careful not to conflate the indices.
The following is not a valid argument:














\(\ds \left({\sum_{i \mathop = 1}^n a_i}\right) \left({\sum_{j \mathop = 1}^n \frac 1 {a_j} }\right)\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n \frac {a_i} {a_j}\)





General Distributivity Theorem














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{i \mathop = 1}^n \frac {a_i} {a_i}\)





Change of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n 1\)





simplification














\(\ds \)

\(=\)







\(\ds n\)











Proof
The second step uses the same index $i$ for two different purposes.
Thus elements of the form $\dfrac {a_i} {a_j}$ where $i \ne j$ are not represented in the summation.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $25$




