The Partition Theorem seeks to establish an equivalence between two classifications of partitioning natural numbers, odd partitions and distinct partitions. 

An odd partition of a natural number n is defined as a set of odd numbers that sum up to n. On the other hand, a distinct partition of n is a set of distinct (or different) numbers that sum up to n.

The theorem states that for every natural number n, the number of distinct partitions (p_distinct(n)) is equivalent to the number of odd partitions (p_odd(n)).

To illustrate this theorem, we construct a bijection, which is a one-to-one correspondence between these two classification types. This is conducted in terms of binary representation, converting the partitions into binary and then taking the sum of certain terms depending on the type of partition.

For an odd partition, it's mapped to a distinct partition by calculating the sum of 2 to the power of i for each part where the binary digit at position i equals 1. For a distinct partition, it's mapped to an odd partition by converting each part into binary and then calculating the sum of 2 to the power of i multiplied by 1.

The proof of this bijection function (mapping process) is carried out by verifying three main factors:

1. The mapping process is well-defined, that's to say, it should consistently convert odd partitions to distinct partitions and vice versa.
2. The inverse mapping process should lead back to the original partition, proving it as a true bijection. 
3. The sizes of the original and transformed partitions should remain the same, ensuring no elements are lost or added in the process.

As an example, consider the odd partition of the number 9, which is {9, 5+3+1}. Through our defined bijection, this maps to the distinct partition: {9, 4+3+2}. 

The conclusion is that the bijection shows that the odd partitions and distinct partitions are equivalent; great! This, in turn, implies that the number of distinct partitions (p_distinct(n)) is equal to the number of odd partitions (p_odd(n)) for every natural number n, which is what the Partition Theorem states.
