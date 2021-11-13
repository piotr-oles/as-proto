export enum WireType {
  /**
   * int32, int64, uint32, uint64, sint32, sint64, bool, enum
   */
  VARINT = 0,
  /**
   * fixed64, sfixed64, double
   */
  FIXED_64 = 1,
  /**
   * string, bytes, embedded messages, packed repeated fields
   */
  LENGTH_DELIMITED = 2,
  /**
   * groups (deprecated)
   * @deprecated
   */
  START_GROUP = 3,
  /**
   * groups (deprecated)
   * @deprecated
   */
  END_GROUP = 4,
  /**
   * fixed32, sfixed32, float
   */
  FIXED_32 = 5,
}
